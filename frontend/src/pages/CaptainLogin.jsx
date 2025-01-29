import { ArrowRight, CarFront, UsersRound } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );
    console.log(response);
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("captain-token", data.token);
      navigate("/captain-home");
    }
    console.log(captainData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://imgs.search.brave.com/ZMRpQ8g_KoB6Hk5mKemNfdIvK6beon4KJ6AYcNvdHTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
          alt="uber logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg mb-2 font-medium">What&apos;s your email ?</h3>

          <input
            className="bg-gray-200 rounded-lg border w-full py-2 px-4 text-lg placeholder:text-base mb-7"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
            required
          />

          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>

          <input
            className="bg-gray-200 rounded-lg border w-full py-2 px-4 text-lg placeholder:text-base mb-7"
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-medium mb-7 rounded-md px-4 py-2 w-full placeholder:text-base text-lg flex items-center justify-center">
            Login
            <ArrowRight className="ml-2" />
          </button>
          <p className="text-center mb-2">
            Join our fleet?
            <Link to="/captain-signup" className="text-blue-600">
              {" "}
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          className="bg-[#555754] text-white font-medium mb-7 rounded-md px-4 py-2 w-full placeholder:text-base text-lg flex items-center justify-center"
          to="/login"
        >
          Sign in as User
          <UsersRound className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
