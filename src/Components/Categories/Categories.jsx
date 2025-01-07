import CategoryCard from "./CategoriesCard";
import img1 from "../../assets/p_img37.png";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/p_img2_1.png";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/elec.avif";
import img6 from "../../assets/children.jpg";

const dataCard = [
  { title: "Woman", img: img1 },
  { title: "Men", img: img3 },
  { title: "Kids", img: img6 },
  { title: "Top-Wear", img: img2 },
  { title: "Bottom-Wear", img: img4 },
  { title: "Winter-Wear", img: img5 },
];

const Categories = () => {
  return (
    <div  className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {dataCard.map((card, index) => (
        <CategoryCard key={index} title={card.title} img={card.img} />
      ))}
    </div>
  );
};

export default Categories;
