import img1 from "../../assets/women.png";
import img2 from "../../assets/women2.jpg";
import img3 from "../../assets/women3.jpg";
import img4 from "../../assets/women4.jpg";
import img5 from "../../assets/p_img13.png";

const cardImage = [
  {
    id: 1,
    img: img1,
    title: "women Ethnic",
    aosDelay: "100",
  },
  {
    id: 2,
    img: img2,
    title: "women Western",

    aosDelay: "300",
  },
  {
    id: 3,
    img: img3,
    title: "Goggles",

    aosDelay: "500",
  },
  {
    id: 4,
    img: img4,
    title: "Printed T-shirt",

    aosDelay: "700",
  },
  {
    id: 5,
    img: img5,
    title: "Fashion T-shirt",

    aosDelay: "900",
  },
];
const Card = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-center xsm:justify-between">
        {cardImage.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            className="flex flex-col"
            key={item.id}
          >
            <div className="group">
              {" "}
              {/* أضفنا مجموعة هنا للتحكم في الهوفر */}
              <img
                className="transform transition-transform duration-500 group-hover:scale-105 cursor-pointer w-[150px] h-[220px] rounded-xl object-cover"
                src={item.img}
                alt=""
              />
              <h2 data-aos="fade-up" className="font-bold text-xl">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
