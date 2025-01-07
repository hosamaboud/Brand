import ProductCard from "./ProductCard";
import Header from "../Utils/Header";

const TopProducts = () => {
  return (
    <div className="container min-h-[550px]">
      <Header
        title="CATEGORIES"
        subtitle="Top selling products for you"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <ProductCard />
    </div>
  );
};
export default TopProducts;
