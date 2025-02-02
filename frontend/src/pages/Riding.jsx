import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed h-10 w-10 bg-white flex  items-center justify-center rounded-full right-2 top-2"
      >
        <i className="ri-home-5-line text-lg font-semibold "></i>
      </Link>
      <div className="h-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt="ride logo"
            className="h-14 "
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Test Driver</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">TS10XX1234</h4>
            <p className="text-sm text-gray-600">Swift Dzire</p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col gap-3">
          <div className="w-full mt-5">
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
        </div>
        <button className="w-full bg-black text-white font-semibold p-3 rounded-xl text-lg mt-5">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
