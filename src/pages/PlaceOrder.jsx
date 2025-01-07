import { useContext, useState } from "react";
import CartTotal from "../Components/Cart/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

const PlaceOrder = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const { navigate } = useContext(ShopContext);

  return (
    <div>
      {/* title */}
      <div className=" flex justify-center items-center my-10 ">
        <p className=" p-2 bg-item_color text-xl font-bold text-primary">
          DELIVERY
          <span className="p-2  bg-item_color text-text_color text-lg font-bold">
            INFORMATION
          </span>
        </p>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* left side  information*/}

        <div className="flex flex-col  gap-4">
          <div className="grid grid-cols-2  gap-4">
            <input
              className="bg-item_color p-2 border rounded-md"
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-item_color p-2 border rounded-md"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="bg-item_color p-2 border rounded-md"
            type="email"
            placeholder="Email address"
          />
          <input
            className="bg-item_color p-2 border rounded-md"
            type="text"
            placeholder="Street"
          />
          <div className="grid grid-cols-2  gap-4">
            <input
              className="bg-item_color p-2 border rounded-md"
              type="text"
              placeholder="City"
            />
            <input
              className="bg-item_color p-2 border rounded-md"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="grid grid-cols-2  gap-4">
            <input
              className="bg-item_color p-2 border rounded-md"
              type="number"
              placeholder="Zip Code"
            />
            <input
              className="bg-item_color p-2 border rounded-md"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="bg-item_color p-2 border rounded-md"
            type="number"
            placeholder="Phone Number"
          />
        </div>

        {/* right side */}
        <div>
          <CartTotal />
          <div className="flex flex-col items-center gap-4">
            <div className=" flex justify-center items-center my-10 ">
              <p className=" p-2 bg-item_color text-xl font-bold text-primary">
                Payment
                <span className="p-2  bg-item_color text-text_color text-lg font-bold">
                  Method
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div
                onClick={() => setSelectedPaymentMethod("visa")}
                className="flex gap-3 items-center border p-2 cursor-pointer"
              >
                <p
                  className={`${
                    selectedPaymentMethod === "visa" ? "bg-green-400" : ""
                  } min-w-3.5 h-3.5 border rounded-full `}
                ></p>
                <img
                  className=" h-8 object-cover bg-item_color"
                  src={assets.visa}
                  alt="visa logo"
                />
              </div>
              <div
                onClick={() => setSelectedPaymentMethod("vodafone")}
                className="flex gap-3 items-center border p-2 cursor-pointer"
              >
                <p
                  className={`${
                    selectedPaymentMethod === "vodafone" ? "bg-green-400" : ""
                  }  min-w-3.5 h-3.5 border rounded-full `}
                ></p>
                <img
                  className=" w-20 h-8 object-cover bg-item_color"
                  src={assets.vodafone}
                  alt="vodafone logo"
                />
              </div>
              <div
                onClick={() => setSelectedPaymentMethod("Cash")}
                className="flex gap-3 items-center border p-2 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    selectedPaymentMethod === "Cash" ? "bg-green-400" : ""
                  } `}
                ></p>
                <p className="text-sm font-medium">Cash On Delivery</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end my-4  mx-10">
            <button
              onClick={() => navigate("/orders")}
              className="bg-primary  hover:bg-bg_productItem transition-all duration-300 w-40 px-4 py-3 rounded-md"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceOrder;
