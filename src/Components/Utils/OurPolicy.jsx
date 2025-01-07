import { assets } from "../../assets/assets";

const OurPolicy = () => {
  return (
    <div
      data-aos="fade-up"
      className="mt-10 bg-bg_policy container flex flex-col sm:flex-row items-center justify-around gap-12 sm:gap-2 text-center py-10"
    >
      <div data-aos="zoom-in">
        <img
          className="w-12 m-auto mb-5"
          src={assets.exchange_icon}
          alt="icon"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div data-aos="zoom-in">
        <img
          className="w-12 m-auto mb-5"
          src={assets.quality_icon}
          alt="icon"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div data-aos="zoom-in" >
        <img className="w-12 m-auto mb-5" src={assets.support_img} alt="icon" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">we provide 24/7 customer support</p>
      </div>
    </div>
  );
};
export default OurPolicy;