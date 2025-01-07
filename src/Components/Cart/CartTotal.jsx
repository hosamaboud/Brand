import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const CartTotal = () => {
  const { getCartAmount, delivery_Fee } = useContext(ShopContext);

  
  return (
    <div className="w-full ">
      <div>
        <p className=" text-sm font-bold text-primary">
          Cart_<span className="text-text_color text-lg font-bold">_Total</span>
        </p>
      </div>
      <div className="flex flex-col  gap-2 mt-4 text-sm">
        <div className="flex justify-between">
          <span>SubTotal :</span>
          <p>${getCartAmount()}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee :</p>
          <span>${delivery_Fee}.00</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total :</b>
          <b>
            
            ${getCartAmount() === 0 ? 0 : getCartAmount() + delivery_Fee}.00
          </b>
        </div>
      </div>
      
    </div>
  );
};
export default CartTotal;
