import { Link } from "react-router";

const CategoryCard = ({ img, title }) => {
  return (
    <div
      data-aos="fade-up"
      className="group mt-20 flex flex-col h-[180px] w-[150px] justify-center items-center gap-3"
    >
      <Link to={`/products/category?category=${title}`}>
        <img
          className="h-[120px] w-[120px] rounded-full group-hover:scale-110 duration-500 object-cover"
          src={img}
          alt="card"
        />
      </Link>
      <p className="text-center text-xl font-bold">{title}</p>
    </div>
  );
};

export default CategoryCard;
