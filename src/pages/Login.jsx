import { SignIn } from "@clerk/clerk-react";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div
      className="container mx-auto flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${assets.login})` }}
      
      data-aos="fade-up"
    >
      <div className="mb-4 bg-item_color rounded-lg p-2">
        <p className="text-4xl text-primary font-bold text-center">Znoon</p>
      </div>
      <SignIn
        appearance={{
          elements: {
            card: "p-4",
          },
        }}
      />
    </div>
  );
};

export default Login;
