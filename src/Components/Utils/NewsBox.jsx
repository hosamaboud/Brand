const NewsBox = () => {
  return (
    <div
      data-aos="fade-up"
      className="text-center bg-bg_policy p-10">
      <p className="text-xl sm:text-2xl  font-medium">Subscribe now & get 20% off</p>
      <p className="text-sm text-gray-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form className="w-full sm:w-1/2 mx-auto flex items-center m-4 ">
        <input type="email" required={true} placeholder="Enter your email" className="w-full p-4 bg-item_color outline-none shadow-lg relative" />
        <button className="bg-primary p-4 shadow-lg">Submit</button>
      </form>
    </div>
  );
};
export default NewsBox;
