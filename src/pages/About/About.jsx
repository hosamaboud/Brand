import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="relative container mx-auto">
      {/* Section 1 */}
      <div className="min-h-[400px] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 sm:my-10 relative">
        {/* Left Side */}
        <div
          data-aos="fade-right"
          style={{
            backgroundImage: `url(${assets.about})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-64 shadow-md sm:rounded-full z-10 flex sm:mt-10 bg-contain sm:bg-cover justify-center items-center text-2xl font-bold text-white"
        >
          About Us
        </div>

        {/* Right Side */}
        <div className="h-64 sm:mt-10 flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <p className="p-2 bg-item_color text-xl font-bold text-primary">
              ABOUT_
              <span className="p-2 bg-item_color text-text_color text-lg font-bold">
                _US
              </span>
            </p>
          </div>
          <p className="text-center text-gray-400 font-light mt-4">
            Welcome to our About Us page! Here, you can learn more about who we
            are and what we do.
          </p>
        </div>
      </div>
      {/* Background Decorative Element */}
      <div className="hidden lg:block h-80 rounded-l-full bg-primary absolute top-2 left-11 w-80"></div>

      {/* Section 2 */}
      <div
        data-aos="zoom-in-up"
        className=" relative grid my-16 grid-cols-1 gap-10 sm:grid-cols-2"
      >
        {/* Left Side */}
        <div className=" flex order-2 sm:order-1 flex-col justify-center gap-6">
          <p>
            <b className=" text-primary">Znoon</b> was born out of a passion for
            innovation and a desire to revolutionize the way people shop online.
            Our journey began with a simple idea: to provide a platform where
            customers can easily discover, explore, and purchase a wide range of
            products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

          <span className="font-bold text-lg text-primary">Our Mission</span>
          <p>
            Our mission at <b className=" text-primary">Znoon</b> is to empower
            customers with choice, convenience, and confidence. We're dedicated
            to providing a seamless shopping experience that exceeds
            expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
        {/* Right Side */}
        <img
          data-aos="zoom-in"
          className=" h-96 shadow-lg z-10 mt-8 w-full object-cover order-1 sm:order-2 rounded-lg"
          src={assets.about2}
          alt="about image"
        />
        <div className="hidden lg:block h-[450px]   bg-primary absolute  right-[22%] w-80"></div>
      </div>

      {/* Section 3 */}
      <div data-aos="fade-up">
        <span className="font-bold text-lg text-primary">Our Vision</span>
        <p>
          Our vision at <b className=" text-primary">Znoon</b> is to be a
          leading online shopping destination that caters to the unique needs
          and preferences of our customers. We're committed to providing a
          seamless and enjoyable shopping experience that goes beyond the
          ordinary.
        </p>
      </div>

      {/* Section 4 */}
      <div className="grid  my-16 grid-cols-1 gap-10 sm:grid-cols-2">
        {/* Left Side */}
        <img
          data-aos="zoom-in"
          className=" h-96 w-full object-cover order-1 sm:order-2 rounded-lg"
          src={assets.about3}
          alt="about image"
        />
        {/* Right Side */}
        <div
          data-aos="zoom-in-up"
          className="relative  flex order-2 sm:order-1 flex-col justify-center gap-6"
        >
          <p className="z-10">
            <b className=" text-teal-600">Znoon</b> is more than just a website;
            it's a community of like-minded individuals who share a passion for
            shopping. We believe that shopping should be an enjoyable
            experience, not just a chore.
          </p>
          <p className="z-10">
            At <b className="text-teal-600">Znoon</b>, we're passionate about
            creating a platform that fosters a sense of community and
            camaraderie among our customers. We believe that shopping should be
            a social experience, not just a transaction.
          </p>
          <div className="hidden lg:hover:rotate-45 transition-transform duration-500 lg:block h-[350px]  rotate-[-45deg] bg-primary absolute  left-[-2%] w-[350px]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
