import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h5
        className="p-2 text-center absolute top-0  w-[93%]"
        onClick={() => {
          props.setConfirmRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl font-bold"></i>
      </h5>{" "}
      <h3 className="font-semibold text-2xl mb-5">
        Confirm this ride to Start
      </h3>
      <div className="flex items-center justify-between p-2 bg-gray-100 rounded-xl">
        <div className="flex items-center justify-between gap-3 ">
          <img
            src="https://imgs.search.brave.com/OjgJoiBFSNYn2ydUxdfqImLVUdVcSRs1nsYjfSJh5aM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZWlvLmZvcmJlcy5j/b20vc3BlY2lhbHMt/aW1hZ2VzL2ltYWdl/c2VydmUvNjUxMjA4/NWMzN2U1NjQ0NzVk/YjdkZmY3LzB4MC5q/cGc_Zm9ybWF0PWpw/ZyZjcm9wPTE0OTcs/MTUwMCx4NjQzLHkz/NjMsc2FmZSZoZWln/aHQ9NDE2JndpZHRo/PTQxNiZmaXQ9Ym91/bmRz"
            alt="user profile pic"
            className="h-12 w-12 rounded-full object-cover"
          />
          <h2 className="text-lg font-medium">Test User Name</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>
      <div className="flex justify-between items-center flex-col gap-3">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">12-11-325/A</h3>
              <p className="text-sm text-gray-700 -mt-1">
                SSV, Pearl block, Street 8
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">12-11-325/A</h3>
              <p className="text-sm text-gray-700 -mt-1">
                SSV, Pearl block, Street 8
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-bank-card-line text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">₹192.58</h3>
              <p className="text-sm text-gray-700 -mt-1">Cash</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-6">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="password"
              placeholder="Enter OTP"
              className="bg-[#eee] px-6 py-4 text-lg rounded-lg w-full mt-5 font-bold"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              required
            />
            <div className="flex w-full items-center gap-4">
              <Link
                to="/captain-riding"
                className="w-full bg-black text-center text-white font-semibold p-3 rounded-xl text-lg mt-5"
                onClick={() => {
                  props.setConfirmRidePopUpPanel(false);
                  props.setRidePopUpPanel(false);
                }}
              >
                Confirm Ride
              </Link>
              <button
                className="w-full bg-red-600 text-white font-semibold p-3 rounded-xl text-lg mt-5"
                onClick={() => {
                  props.setConfirmRidePopUpPanel(false);
                  props.setRidePopUpPanel(false);
                }}
              >
                Ignore
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
