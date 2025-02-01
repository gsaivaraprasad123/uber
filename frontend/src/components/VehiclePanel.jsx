import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-2 text-center absolute top-0  w-[93%]"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl font-bold"></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-5">Choose a trip</h3>
      {/* UberGo */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between p-3 border-2 active:border-black rounded-xl mb-2 "
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt="car logo"
          className="h-10"
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i className="ri-group-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹202.45</h2>
      </div>
      {/* Moto */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between p-3 border-2 active:border-black rounded-xl mb-2 "
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="moto logo"
          className="h-10"
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-lg">
            Moto{" "}
            <span>
              <i className="ri-group-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">1 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹75.55</h2>
      </div>
      {/* Auto */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between p-3 border-2 active:border-black rounded-xl mb-2 "
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="auto logo"
          className="h-10"
        />
        <div className=" w-1/2 ml-2">
          <h4 className="font-medium text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-group-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">4 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹165.88</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
