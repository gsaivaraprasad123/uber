import { ArrowRight, UsersRound } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
          <h3 className="text-lg mb-2 font-medium">What&apos;s your name ?</h3>
          <div className="flex gap-2">
            <input
              className="bg-gray-200 rounded-lg border w-full py-2 px-4 text-lg placeholder:text-base mb-7"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="Firstname"
              required
            />
            <input
              className="bg-gray-200 rounded-lg border w-full py-2 px-4 text-lg placeholder:text-base mb-7"
              type="test"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Lastname"
              required
            />
          </div>

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

          <h3 className="text-lg mb-2 font-medium">Create Password</h3>

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
            Sign up
            <ArrowRight className="ml-2" />
          </button>
          <p className="text-center mb-2">
            Already have an account ?
            <Link to="/login" className="text-blue-600">
              {" "}
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
