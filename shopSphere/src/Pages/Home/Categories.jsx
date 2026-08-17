import CategoryCard from "../../Components/Common/CategoryCard";

export default function Categories() {
  return (
    <section className="px-6 py-12">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <CategoryCard
          image="/src/Assets/shopping-girl.png"
          name="Electronics"
        />

        <CategoryCard image="/src/Assets/shopping-girl.png" name="Beauty" />

        <CategoryCard image="/src/Assets/shopping-girl.png" name="Fragrances" />

        <CategoryCard image="/src/Assets/shopping-girl.png" name="Furniture" />
      </div>
    </section>
  );
}
