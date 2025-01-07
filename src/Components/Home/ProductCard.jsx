import { FaStar } from "react-icons/fa";
import img1 from "../../assets/shirt.png";
import img2 from "../../assets/shirt2.png";
import img3 from "../../assets/shirt3.png";

const cardImage = [
  {
    id: 1,
    img: img1,
    title: "Casual",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    Delay: "200",
  },
  {
    id: 2,
    img: img2,
    title: "Printed Shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    Delay: "400",
  },
  {
    id: 3,
    img: img3,
    title: "Man T-shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    Delay: "600",
  },
];
const ProductCard = () => {
  return (
    <div className="flex flex-col md:flex-row text-center items-center justify-around">
      {cardImage.map((item) => (
        <div
          data-aos="fade-up"
          data-aos-delay={item.Delay}
          key={item.id}
          className="group bg-bg_card hover:bg-border_hover hover:text-text_card flex mt-24 flex-col max-w-[300px] items-center justify-between shadow-md rounded-lg p-4 duration-300"
        >
          <div className="relative h-[100px]">
            <img
              className="absolute top-[-100px] right-[-70px]  max-w-[140px] group-hover:scale-105 duration-300"
              src={item.img}
              alt=""
            />
          </div>
          <div>
            <span className="text-yellow-300 flex items-center mb-2        justify-center">
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
            </span>
            <span className="font-bold text-lg">{item.title}</span>
            <p>{item.description}</p>
            <button
              className="bg-primary group-hover:bg-gray-100
            group-hover:text-primary py-1 px-4 mt-4 rounded-3xl duration-300"
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCard;
