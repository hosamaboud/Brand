import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";

const Orders = () => {
  const { wear, cartItems, orders } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);
  useEffect(() => {
    let tempData = [];

    if (orders.length > 0) {
      tempData = orders.flatMap((order) =>
        Object.keys(order.items).map((size) => ({
          id: order.id,
          size,
          quantity: order.items[size],
          date: order.date,
        }))
      );
    } else {
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [orders, cartItems]);
  return (
    <div>
      {previewImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative">
            <img
              loading="lazy"
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
      {cartData.length > 0 ? (
        <div className="mx-10 sm:container">
          {/* title */}
          <div className=" flex justify-center items-center my-10 ">
            <p className=" p-2 bg-item_color text-xl font-bold text-primary">
              Your_
              <span className="p-2  bg-item_color text-text_color text-lg font-bold">
                _Order
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
                  className="bg-item_color mb-6 flex flex-col sm:flex-row rounded-lg  gap-4 items-center p-4  sm:justify-between sm:px-4   shadow-lg"
                >
                  <div className=" flex flex-col sm:flex-row p-4 items-center sm:items-start gap-6">
                    {/* product image */}
                    <img
                      loading="lazy"
                      onClick={() => setPreviewImg(productData.image)}
                      src={productData.image}
                      alt={productData.name}
                      className="w-20 sm:w-28 cursor-pointer"
                    />

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                      {/* product details   */}
                      <div className="flex gap-3 flex-col items-start">
                        <p className="sm:text-base font-medium">
                          {productData.name}
                        </p>
                        <div className="flex gap-4">
                          <span className=" sm:text-base">
                            ${productData.price}
                          </span>
                          <span className="sm:text-base flex items-center gap-2">
                            Size:
                            <p>{item.size}</p>
                          </span>
                          <span className="sm:text-base flex items-center gap-2">
                            Quantity:
                            <p>{item.quantity}</p>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>Date :</p>
                          <p className="text-sm text-gray-400 ">
                            {new Date().toDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>Payment Method:</p>
                          <p className="text-sm text-gray-400 ">
                            Cash on Delivery
                          </p>
                        </div>
                      </div>
                      {/* status */}
                      <div className="flex items-center sm:ml-20 gap-2">
                        <p className="w-3.5 h-3.5 rounded-full bg-green-500"></p>
                        <p>Ready to ship</p>
                      </div>
                    </div>
                  </div>

                  <button className="p-2 border bg-bodyColor h-[40px]  rounded-md">
                    Track Order
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex flex-col items-center rounded-lg shadow-custom-glow my-10 w-[300px]">
            <p className="text-2xl mt-10">
              Your <span className="font-bold text-primary">Cart</span> is empty
            </p>
            <img loading="lazy" src={assets.empty_Cart} alt="empty cart" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Orders;
