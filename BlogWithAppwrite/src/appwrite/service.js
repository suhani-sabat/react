import config from "../config/config";
import { Client, ID, TablesDB, Query, Storage } from "appwrite";

class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.database = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  //services related to post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      await this.database.createRow({
        databaseId: config.appwriteDatabaseId,
        tableId: config.appwriteTableId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      console.log("Appwrite service :: createPost :: error ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateRow({
        databaseId: config.appwriteDatabaseId,
        tableId: config.appwriteTableId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
        },
      });
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.tablesDB.deleteRow({
        databaseId: config.appwriteDatabaseId,
        tableId: config.appwriteTableId,
        rowId: slug,
      });

      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getRow({
        databaseId: config.appwriteDatabaseId,
        tableId: config.appwriteTableId,
        rowId: slug,
      });
    } catch (error) {
      console.log("Appwrite service :: getPost :: error ", error);
      return false;
    }
  }

  async listPosts() {
    try {
      return await this.database.listRows({
        databaseId: config.appwriteDatabaseId,
        tableId: config.appwriteTableId,
        queries: [Query.equal("status", "active")],
      });
    } catch (error) {
      console.log("Appwrite service :: listPosts :: error ", error);
    }
  }

  //service related to file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile({
        bucketId: config.appwriteBucketId,
        fileId: ID.unique(),
        file: file,
      });
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error ", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile({
        bucketId: config.appwriteBucketId,
        fileId: fileId,
      });
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error ", error);
      return false;
    }
  }

  previewFile(fileId){
    return this.bucket.getFilePreview({
        bucketId: config.appwriteBucketId,
        fileId: fileId
    })
  }
}

const service = new Service();

export default service;
