import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const RelatedProducts = ({ category, subCategory }) => {
  const { wear } = useContext(ShopContext);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (wear.length > 0 && category && subCategory) {
      const products = wear.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      setRelated(products.slice(0, 5)); 
    }
  }, [wear, category, subCategory]); 
  return (
    <div className="mt-20 text-center">
      <h1 className="text-2xl my-10 font-bold">Related Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        {related.map((item) => (
          <div className="relative group" key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img
                className="rounded-3xl group-hover:scale-105 duration-500"
                src={item.image}
                alt={item.name}
              />
              <p className="items-center gap-1 hidden group-hover:flex bg-primary text-black p-1 transition-all delay-500 rounded-xl absolute bottom-2 right-2">
                Details
                <IoIosArrowForward />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
