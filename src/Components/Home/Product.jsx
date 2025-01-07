import { Link } from "react-router";

const CategoryCard = ({ data }) => {
  return (
    <div
      style={{ backgroundColor: data.color }}
      className="container my-20  text-white w-[90%] lg:h-[320px] p-10 rounded-2xl flex lg:flex-row flex-col lg:justify-between justify-around items-center"
    >
      <div data-aos="fade-right" className="flex flex-col gap-4 justify-center">
        <span className="text-sm">{data.discount}</span>
        <h1 className="lg:text-7xl text-4xl font-extrabold lg:w-[300px]">
          {data.title}
        </h1>
        <span className="text-sm">{data.date}</span>
      </div>
      <div data-aos="zoom-in">
        <img src={data.image} alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col gap-4 justify-center items-center"
      >
        <p className="text-sm">{data.subtitle}</p>
        <h1 className="lg:text-5xl text-2xl font-extrabold">{data.title2}</h1>
        <span className="text-sm  text-center  w-[300px]">
          {data.description}
        </span>
        <Link
          to={"/products"}
          className="text-white bg-black px-4 py-2 rounded-md"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};
export default CategoryCard;
