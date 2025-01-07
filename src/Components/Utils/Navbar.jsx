import { Link, NavLink } from "react-router";
import { assets } from "../../assets/assets.js";
import { useContext, useEffect, useState } from "react";
import {
  BookOpenText,
  ChevronDown,
  CircleUserRound,
  ShoppingBag,
  HouseIcon,
  MoonStar,
  PlugZap,
  Search,
  Shirt,
  ShoppingCart,
  Sun,
} from "lucide-react";
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { ShopContext } from "../../Context/ShopContext.jsx";

const dropdownCategories = [
  { id: 1, name: "Electronics", link: "/products", icon: <PlugZap /> },
  { id: 2, name: "Clothing", link: "/products", icon: <Shirt /> },
  { id: 3, name: "Home & Garden", link: "/products", icon: <HouseIcon /> },
  { id: 4, name: "Books", link: "/products", icon: <BookOpenText /> },
];

const navLink = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/products" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [visible, setVisible] = useState(false);
  const { user, isLoaded } = useUser();
  const { getCartCount, getOrderCount } = useContext(ShopContext);
  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-theme", !isDarkMode);
  };
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* upper navbar */}
      <header className="w-full py-2 sticky top-0 z-50 bg-primary ">
        <div className="flex py-2 items-center mr-auto lg:px-10 px-3 max-w-screen-xl lg:gap-x-5 gap-x-3  ">
          <Link to="/" className="flex lg:gap-x-2  justify-center items-center">
            <img
              src={assets.logo}
              alt="our logo Brand"
              className="lg:w-10 w-6 "
              loading="lazy"
            />
            <span className="lg:text-2xl text-text_color text-sm font-bold">
              Z-noon
            </span>
          </Link>
          <form
            action="/search"
            className="flex-auto items-center border justify-center
          bg-bodyColor  rounded-lg relative py-2  border-border_color hover:border-border_hover focus-within:border-border_hover   "
          >
            <input
              className="bg-bodyColor lg:w-full sm:w-[80%] w-[160px] rounded-lg px-10 focus:bg-bodyColor focus:outline-none "
              type="text"
              name="query"
              placeholder="Search products..."
            />

            <Search className="absolute top-2 left-2  " />
          </form>
          <button id="btn_theme" onClick={toggleTheme}>
            {isDarkMode ? <MoonStar /> : <Sun />}
          </button>
        </div>
        {/* lower navbar */}
      </header>
      <div className="py-2 text-text_color container bg-border_hover flex items-center justify-between lg:px-10 lg:gap-x-5 font-medium md:px-2 max-w-screen-xl  md:mx-auto md:gap-x-3">
        <ul className="hidden sm:flex justify-center items-center gap-x-2 sm:gap-5 text-sm">
          {navLink.map((item) => (
            <li key={item.id} className="group relative">
              <NavLink to={item.link}>
                <p>{item.name}</p>
                <span className="hidden group-hover:block h-[2px] rounded-full bg-bg_item transition-all duration-500"></span>
              </NavLink>
            </li>
          ))}
          <li className="text-bg_scroll  group cursor-pointer flex flex-col items-center ">
            <div className="flex items-center gap-1">
              <p>COLLECTION</p>
              <ChevronDown className="group-hover:rotate-180 text-sm" />
            </div>

            <div className="relative">
              <ul
                className=" absolute hidden bg-bodyColor group-hover:flex flex-col
              gap-y-3 w-40 p-2 rounded-lg z-30 "
              >
                {dropdownCategories.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="flex items-center justify-between gap-1 hover:bg-primary rounded-lg p-1 text-text_color "
                    >
                      {item.name}
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
        <div className="flex  mt-2 gap-5">
          <ClerkLoaded>
            <SignedIn>
              {isLoaded && user ? (
                <>
                  <NavLink to={"/cart"} className="relative block">
                    <p>
                      <ShoppingBag className="w-6 h-6 " />
                    </p>
                    <span className=" inline-flex items-center justify-center absolute top-[-8px] right-[-5px] bg-bg_item text-sm font-bold text-white px-1 rounded-full">
                      {getCartCount()}
                    </span>
                  </NavLink>

                  <NavLink to={"/orders"} className="relative block">
                    <p>
                      <ShoppingCart className="w-6 h-6 " />
                    </p>
                    <span className=" inline-flex items-center justify-center absolute top-[-8px] right-[-5px] bg-bg_item text-sm font-bold text-white px-1 rounded-full">
                      {getOrderCount()}
                    </span>
                  </NavLink>
                  <Link>
                    <UserButton className="w-6 h-6  " />
                  </Link>
                </>
              ) : null}
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Link to="">
                  <CircleUserRound className="w-6 h-6 " />
                </Link>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
        <BiMenuAltRight
          onClick={() => setVisible(true)}
          className="sm:hidden text-4xl cursor-pointer text-bg_scroll"
        />
      </div>
      {/* mobile menu */}
      <div
        className={`absolute w-full top-0 right-0  h-screen bg-bodyColor z-50 duration-500 ease-in-out transform ${
          visible ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setVisible(false)}
        >
          <IoClose size={30} />
        </div>
        <div className="container  flex flex-col justify-center mt-10  text-xl">
          {navLink.map((item) => (
            <NavLink
              key={item.id}
              onClick={() => setVisible(false)}
              to={item.link}
              className="text-text_color p-1 hover:bg-border_hover
                hover:text-white transition-all rounded-lg duration-200"
            >
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
export default Navbar;
