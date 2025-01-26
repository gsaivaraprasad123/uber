import React from "react";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import { LogIn } from "lucide-react";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://i.pinimg.com/736x/87/37/e8/8737e8c8294d5985d25f87fa6eef8c9b.jpg)] h-screen flex  justify-between flex-col pt-8 w-full">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber logo"
        />
        <div className="bg-white pb-7 py-4 px-4 ">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 font-semibold"
            to="/login"
          >
            Continue
            <LogIn className="ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
