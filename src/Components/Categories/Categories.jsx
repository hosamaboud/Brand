import { Link } from "react-router";
import img1 from "../../assets/p_img37.png";
import img2 from "../../assets/p_img40.png";
import img3 from "../../assets/p_img2_1.png";
import img4 from "../../assets/p_img7.png";
import img5 from "../../assets/p_img45.png";
import img6 from "../../assets/children.jpg";

const dataCard = [
  { title: "Women", img: img1, type: "category" },
  { title: "Men", img: img3, type: "category" },
  { title: "Kids", img: img6, type: "category" },
  { title: "Topwear", img: img2, type: "subCategory" },
  { title: "Bottomwear", img: img4, type: "subCategory" },
  { title: "Winterwear", img: img5, type: "subCategory" },
];

const Categories = () => {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {dataCard.map((card, index) => (
        <Link
          data-aos="fade-up"
          to={
            card.type === "category"
              ? `/products/category?category=${card.title}`
              : `/products/category?subCategory=${card.title}`
          }
          key={index}
          className=" group p-4 my-16 text-center"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-32 shadow-custom-glow h-32 rounded-full object-cover mb-2 group-hover:scale-110 duration-500"
          />
          <h3 className="text-lg font-bold">{card.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
