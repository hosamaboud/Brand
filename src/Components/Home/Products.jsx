import Card from "./Card";
import Header from "../Utils/Header";

const Products = () => {
  return (
    <div className="container flex flex-col  mt-16 min-h-[550px] ">
      {/* Header section */}
      <Header
        title="PRODUCTS"
        subtitle="Top selling products for you"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      {/* Card section */}
      <Card />
    </div>
  );
};
export default Products;
