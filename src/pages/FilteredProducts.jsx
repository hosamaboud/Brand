import { Link, useLocation } from "react-router";
import { wear } from "../db/data";

const FilteredProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const subCategory = queryParams.get("subCategory");

  // تصفية المنتجات بناءً على category وsubCategory
  const filteredProducts = wear.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSubCategory = subCategory
      ? product.subCategory === subCategory
      : true;
    return matchesCategory && matchesSubCategory;
  });

  return (
    <div className="container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="p-4 border rounded shadow-sm hover:shadow-lg"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-2"
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-green-600 font-bold mt-2">${product.price}</p>
        </Link>
      ))}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 col-span-full">
          No products found for the category "{category}"{" "}
          {subCategory && `and subcategory "${subCategory}"`}.
        </p>
      )}
    </div>
  );
};

export default FilteredProducts;
