import Navbar from "./components/Utils/Navbar";
import Footer from "./components/Utils/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useLocation } from "react-router";
import OurPolicy from "./Components/Utils/OurPolicy";
import NewsBox from "./Components/Utils/NewsBox";
const Layout = ({ children }) => {


React.useEffect(() => {
  AOS.init({
    duration: 900,
    easing: "ease-in-out",
    offset: 100,
    delay: 100,
  });

  // Refresh AOS whenever the route changes
  AOS.refresh();
}, [useLocation()]);

  return (
    <>
      <Navbar />
      {/* <Searchbar /> */}
      <main className=" mx-auto ">{children}</main>
      <OurPolicy />
      <NewsBox />
      <Footer />
    </>
  );
};

export default Layout;
