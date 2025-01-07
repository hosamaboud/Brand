import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { FaStar } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import RelatedProducts from "../../Components/Products/RelatedProducts";

const Product = () => {
  const { wear, addToCart } = useContext(ShopContext);
  const [previewImg, setPreviewImg] = useState(null);
  const { id } = useParams();
  const product = wear.find((item) => item.id === id);
  const [mainImage, setMainImage] = useState(product.image);

  const [size, setSize] = useState("");

  useEffect(() => {
    setMainImage(product?.image);
    setSize("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id, wear, product]);

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found</div>;
  }

  return (
    <div className="container mt-14 ">
      {/* preview image */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative">
            <img
              src={previewImg}
              alt="Preview"
              className="max-w-full max-h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
              onClick={() => setPreviewImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ============= product image ============== */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {product.smallImage && product.smallImage.length > 0 ? (
            <div className="flex sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {product.smallImage.map((img, index) => (
                <img
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  src={img}
                  alt={`Small Image ${index + 1}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
              <img
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={product.image}
                onClick={() => setPreviewImg(product.image)}
              />
            </div>
          )}

          <div className=" w-full sm:w-[80%]">
            <img
              className="cursor-pointer w-full h-auto"
              src={mainImage}
              alt="Main Product"
              onClick={() => setPreviewImg(product.image)}
            />
          </div>
        </div>
        {/* ============= product details ============== */}
        <div className="flex-1">
          <h1 className="text-normal sm:text-2xl  font-bold mt-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-lg sm:text-xl text-yellow-300" />
            <FaStar className="text-lg sm:text-xl text-yellow-300" />
            <FaStar className="text-lg sm:text-xl text-yellow-300" />
            <FaStar className="text-lg sm:text-xl text-yellow-300" />
            <FaStar className="text-lg sm:text-xl text-red-200" />
            <p className="ml-3 text-lg sm:text-xl">(122)</p>
          </div>
          <p className="mt-5 text-lg font-bold sm:font-medium sm:text-2xl">
            $ {product.price}
          </p>
          <p className="font-light text-slate-500 text-sm sm:text-base mt-5 max-w-[450px]">
            {product.description}
          </p>
          <div className="my-4 flex flex-col gap-4">
            <p className=" text-lg font-bold sm:font-medium sm:text-2xl">
              Select Size
            </p>
            <div className="flex gap-5">
              {product.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`py-4 px-5 shadow-custom-glow ${
                    size === item
                      ? "border-[1px] border-primary bg-item_color   "
                      : ""
                  } `}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => addToCart(product.id, size)}
              className="group w-[170px] active:bg-primary/40  text-lg flex items-center gap-2 bg-primary  py-3 px-5 "
            >
              ADD To Cart
              <BsCartCheck className="text-2xl group-hover:translate-x-4 transition-all duration-300 " />
            </button>
            <hr className="sm:w-4/5" />
          </div>
          <div className="font-light text-slate-500 text-sm sm:text-base">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ============ Description && Review ============== */}
      <div className="mt-20">
        <div className="flex items-center ">
          <h1 className="  py-2 px-2 text-base font-bold border-[1px] border-gray-200 ">
            Description
          </h1>
          <h1 className=" py-2 px-2 text-base font-light border-[1px] border-gray-200 ">
            Review (122)
          </h1>
        </div>
        <div className="flex flex-col gap-4 border-[1px] py-6 px-2 border-gray-200 ">
          <p className="font-light text-slate-500 text-sm ">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="font-light text-slate-500 text-sm">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/* =========== Related products ============== */}
      <RelatedProducts
        category={product.category}
        subCategory={product.subCategory}
      />
    </div>
  );
};

export default Product;
