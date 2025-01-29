import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.user);
      localStorage.setItem("captain-token", data.token);
      navigate("/captain-home");
    }

    console.log(captainData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
    setCaptain("");
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

          <h3 className="text-lg mb-2 font-medium">Vehicle Information</h3>
          <div className="flex gap-4 mb-7">
            <input
              className="bg-gray-200 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              required
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              required
              className="bg-gray-200 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>

          <div className="flex gap-4 mb-7">
            <input
              className="bg-gray-200 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              required
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              required
              className="bg-gray-200 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-xs"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              placeholder="Vehicle Type"
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-medium mb-7 rounded-md px-4 py-2 w-full placeholder:text-base text-lg flex items-center justify-center">
            Create Captain Account
            <ArrowRight className="ml-2" />
          </button>
          <p className="text-center mb-2">
            Already have an account ?
            <Link to="/captain-login" className="text-blue-600">
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

export default CaptainSignup;
