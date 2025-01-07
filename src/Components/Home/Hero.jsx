import { Link } from "react-router";
import img1 from "../../assets/hero/sale.png";
import img2 from "../../assets/hero/shopping.png";
import img3 from "../../assets/hero/women.png";
import Slider from "react-slick";
import {  ArrowBigRightDashIcon } from "lucide-react";

const heroImage = [
  {
    id: 1,
    img: img1,
    alt: "Sale",
    title: "70% off on all products sale",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    img: img2,
    alt: "Shopping",
    title: "20% off shopping items",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    img: img3,
    alt: "Women",
    title: "upto 30% off women collection",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};
const Hero = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center   min-h-[350px] sm:min-h-[450px] bg-item_color ">
      <div className="h-[600px] w-[700px] bg-primary/40 rotate-45 absolute rounded-3xl -top-1/2 right-0 -z-9"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {heroImage.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col gap-4 justify-center pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <p className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                    {item.title}
                  </p>
                  <p className="text-sm">{item.description}</p>

                  <Link
                    to="/products"
                    className="flex group items-center gap-2 text-black bg-primary w-[120px] p-2 rounded-xl "
                  >
                    Shop Now
                    <ArrowBigRightDashIcon className="group-hover:translate-x-4 transition-all duration-300" />
                  </Link>
                </div>

                <div className="order-1 sm:order-2 relative z-10">
                  <div>
                    <img
                      className="  w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] mx-auto object-contain sm:scale-125"
                      src={item.img}
                      alt="{item.alt}"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Hero;
