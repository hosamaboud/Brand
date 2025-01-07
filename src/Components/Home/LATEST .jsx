import Header from "../Utils/Header";
import ProductItem from "./ProductItem";

const LATEST = () => {
  return (
    <div className="container">
      <Header title="LATEST-PRODUCT" link="products" subtitle="New  Collection for you" />
      <ProductItem />
    </div>
  );
};
export default LATEST;
