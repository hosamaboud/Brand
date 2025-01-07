import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const ProductItem = () => {
  const { wear } = useContext(ShopContext);
  const [latestCollection, setLatestCollection] = useState([]);

  useEffect(() => {
    setLatestCollection(wear.slice(0, 10));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {latestCollection.map((product) => (
        <div
          data-aos="fade-up"
          className="relative group" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img
              className="rounded-3xl group-hover:scale-105 duration-500"
              src={product.image}
              alt={product.name}
            />
            <p className=" items-center gap-1 hidden group-hover:flex bg-primary text-black p-1 transition-all delay-500 rounded-xl absolute bottom-2 right-2">
              Details
              <IoIosArrowForward />
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ProductItem;
