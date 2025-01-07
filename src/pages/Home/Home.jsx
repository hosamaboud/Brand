import Product from "../../Components/Home/Products";
import Hero from "../../Components/Home/Hero";
import TopProducts from "../../Components/Home/TopProducts";
import Banner from "../../Components/Home/Banner";

import Testimonials from "../../Components/Home/Testimonials";
import CategoryCard from "../../Components/Home/Product";
import headphone from "../../assets/headphone.png";
import Smartphone from "../../assets/smartwatch2-removebg-preview.png";
import Categories from "../../Components/Categories/Categories";
import LATEST from "../../Components/Home/LATEST ";
const Data_Card = {
  discount: "30% OFF",
  title: "Winter Sale",
  date: "10 Jan to 28 Jan",
  image: headphone,
  color: "#FA4032",
  subtitle: "Air Solo Bass",
  title2: "Winter Sale",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
const Data_Card1 = {
  discount: "50% OFF",
  title: "Summer Sale",
  date: "15 Feb to 25 Feb",
  image: Smartphone,
  color: "#73EC8B",
  subtitle: "Air Solo Bass",
  title2: "Summer Sale",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <LATEST />
      <Product />
      <CategoryCard data={Data_Card} />
      <TopProducts />
      <Banner />
      <CategoryCard data={Data_Card1} />

      <Testimonials />
    </>
  );
};
export default Home;
