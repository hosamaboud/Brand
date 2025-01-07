import { createContext, useState } from "react";
import { wear } from "../db/data";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useAuth } from "@clerk/clerk-react"; // استيراد مكتبة Clerk

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const delivery_Fee = 10;
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { userId } = useAuth();

  const addToCart = async (itemId, size) => {
    if (!userId) {
      toast.error("Please sign in to add items to the cart");
      navigate("/sign-in");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Please select a size");
      return;
    }

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
    toast.success("Item added in cart");
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] && cartData[itemId][size] !== undefined) {
      cartData[itemId][size] = quantity;
      if (quantity === 0) {
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
      setCartItems(cartData);
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = wear.find((item) => item.id === items);
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          try {
            totalAmount += cartItems[items][item] * itemInfo.price;
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
    return totalAmount;
  };
  const [orders, setOrders] = useState([]);

  const placeOrder = () => {
    setOrders((prevOrders) => [
      ...prevOrders,
      ...Object.keys(cartItems).map((id) => ({
        id,
        items: cartItems[id],
        date: new Date(),
      })),
    ]);
    setCartItems([]);
  };
  const getOrderCount = () => {
    return orders.reduce((total, order) => {
      return (
        total + Object.values(order.items).reduce((sum, qty) => sum + qty, 0)
      );
    }, 0);
  };

  const value = {
    delivery_Fee,
    wear,
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity,
    navigate,
    getCartAmount,
    placeOrder,
    orders,
    getOrderCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
