import { Link } from "react-router";

const Header = ({ title, subtitle, description, link }) => {
  return (
    <div data-aos="fade-up" className="flex mt-10 justify-between items-center">
      <div data-aos="fade-up" className="flex flex-col mb-8">
        <h1 className="text-lg sm:text-4xl  font-bold">{title}</h1>
        <p className="text-sm text-primary">{subtitle}</p>
        <span className="text-sm text-gray-400">{description}</span>
      </div>
      <Link
        to={`/${link}`}
        className="text-black text-center bg-primary mb-6 p-2 w-[120px] rounded-xl hover:scale-105 transition-all duration-300"
      >
        View all
      </Link>
    </div>
  );
};
export default Header;
