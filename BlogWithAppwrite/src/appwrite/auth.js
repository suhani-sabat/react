import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // Create a new account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email: email,
        password: password,
        name: name,
      });

      if (userAccount) {
        // Automatically login after signup
        return this.login({
          email: email,
          password: password,
        });
      }

      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  // Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({
        email: email,
        password: password,
      });
    } catch (error) {
      throw error;
    }
  }

  // Get currently logged-in user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);

      return null;
    }
  }

  // Logout
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
