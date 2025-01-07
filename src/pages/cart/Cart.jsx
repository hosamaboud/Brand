import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import img from "../../assets/emptyCart.png";
import { MdDeleteForever } from "react-icons/md";
import TotalCart from "../../Components/Cart/CartTotal";

const Cart = () => {
  const [previewImg, setPreviewImg] = useState(null);
  const [cartData, setCartData] = useState([]);
  const { wear, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  useEffect(() => {
    let tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        tempData.push({
          id: items,
          size: item,
          quantity: cartItems[items][item],
        });
      }
    }
    setCartData(tempData);
  }, [wear, cartItems]);

  return (
    <div>
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

      {/*products data*/}
      {cartData.length > 0 ? (
        <div className="mx-10">
          {/* title */}
          <div className=" flex justify-center items-center my-10 ">
            <p className=" p-2 bg-item_color text-xl font-bold text-primary">
              Your_
              <span className="p-2  bg-item_color text-text_color text-lg font-bold">
                _Cart
              </span>
            </p>
          </div>

          {/* products */}
          <div>
            {cartData.map((item, index) => {
              const productData = wear.find(
                (product) => product.id === item.id
              );
              return (
                <div
                  key={index}
                  className="bg-item_color mb-6 flex flex-col sm:flex-row rounded-lg justify-around gap-8 items-center shadow-lg"
                >
                  {/* product image */}
                  <div className="p-2 w-18 sm:w-40">
                    <img
                      onClick={() => setPreviewImg(productData.image)}
                      src={productData.image}
                      alt={productData.name}
                      className="cursor-pointer"
                    />
                  </div>

                  {/* product details */}
                  <div className="flex gap-4 flex-col">
                    <p className="text-base sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex gap-4">
                      <span className="text-base sm:text-lg flex px-4 py-2 gap-2">
                        Price:
                        <p className="text-primary">${productData.price}</p>
                      </span>
                      <span className="text-base sm:text-lg flex items-center gap-2">
                        Size:
                        <p className="px-2 py-1 sm:px-4 sm:py-2 border-[1px]">
                          {item.size}
                        </p>
                      </span>
                    </div>
                  </div>

                  {/* set quantity */}
                  <div className="flex p-4 md:min-w-[200px] items-center gap-8 justify-between">
                    <div className="flex gap-2 sm:flex-col items-center">
                      <p>Quantity</p>
                      <input
                        className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 bg-item_color"
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(
                                productData.id,
                                item.size,
                                Number(e.target.value)
                              )
                        }
                      />
                    </div>
                    <button
                      className="group"
                      onClick={() =>
                        updateQuantity(productData.id, item.size, 0)
                      }
                    >
                      <MdDeleteForever className="group-hover:translate-y-[-5px] transition-all  group-hover:text-red-400 w-[30px] h-[30px] duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-end flex-col my-20 ">
            <div className="w-full sm:w-[450px]">
              <TotalCart />
            </div>
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className=" bg-primary  py-3 my-8 px-8 rounded-md"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex flex-col items-center rounded-lg shadow-custom-glow my-10 w-[300px]">
            <p className="text-2xl mt-10">
              Your <span className="font-bold text-primary">Cart</span> is empty
            </p>
            <img src={img} alt="empty cart" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
