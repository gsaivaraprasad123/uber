import { ArrowRight, CarTaxiFront } from "lucide-react";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://imgs.search.brave.com/D8HkVGt1zzILlOifORHv6O0E8XxYyh1M4C50veyzyVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTIw/N3ViZXItYXBwLWxv/Z28tcG5nLnBuZw"
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
            New Here?
            <Link to="/signup" className="text-blue-600">
              {" "}
              Create Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          className="bg-[#555754] text-white font-medium mb-7 rounded-md px-4 py-2 w-full placeholder:text-base text-lg flex items-center justify-center"
          to="/captain-login"
        >
          Sign in as Captain
          <CarTaxiFront className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
