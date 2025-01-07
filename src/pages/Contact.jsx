import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="container">
      {/* title */}
      <div
        data-aos="fade-up"
        className=" flex justify-center items-center my-10 ">
        <p className=" p-2 bg-item_color text-xl font-bold text-primary">
          Contact
          <span className="p-2  bg-item_color text-text_color text-lg font-bold">
            _US
          </span>
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="relative rounded-lg h-[300px] my-10 bg-cover flex 
         justify-between items-center  "
        style={{
          backgroundImage: `url(${assets.contact_banar})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          data-aos="zoom-in"
          className="mx-20 flex flex-col gap-4">
          <p className="font-bold text-teal-600 text-2xl">Get In Touch</p>
          <div>
            <span className="text-gray-600 font-light ">
              Got a question or just want to say hello?
            </span>
            <p className="text-gray-600 font-light ">
              We'd love to hear from you!
            </p>
            <span className="text-gray-600 font-light ">
              Have Questions? We're Here to Help!
            </span>
            <p className="text-gray-600 font-light ">Contact Us Anytime</p>
          </div>
          <button className="bg-black text-white px-4 py-2 ">
            Let’s Connect!
          </button>
        </div>
      </div>

      <div
        className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* left side */}
        <img
          data-aos="fade-right"
          className="h-96 w-full object-cover"
          src={assets.contact_img}
          alt="contact img"
        />

        {/* right side */}
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center   gap-4">
          <p className="text-2xl font-bold">Our Store</p>
          <div className="flex flex-col gap-3">
            <p className="text-gray-600">
              Downtown Cairo <br /> Talaat Harb Square.
            </p>
            <p className="text-gray-600">
              Tel: (415) 555-0132 Email: admin@forever.com
            </p>
          </div>
          <p className="text-2xl font-bold">Careers at Znoon</p>
          <div className="flex flex-col gap-3">
            <p className="text-gray-600">
              We are always looking for talented people to join our team. If you
              have a passion for fashion and a knack for creating innovative
              designs, we want to hear from you.
            </p>
            <p className="text-gray-600">
              Email: careers@forever.com <br /> Tel: (415) 555-0132
            </p>
          </div>
          <button className="bg-primary text-text_color w-[200px]  p-4 rounded-md">
            Explore Careers
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact