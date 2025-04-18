import React from "react";

const WaitingForDriver = (props) => {
  const formatAddress = (address) => {
    if (!address) return ["", ""]; // Handle empty case
    const index = address.indexOf(","); // Find first comma
    if (index === -1) return [address, ""]; // No comma case
    return [address.substring(0, index), address.substring(index + 1).trim()]; // Split into main & remaining
  };

  const [pickupMain, pickupSub] = formatAddress(props.pickup);
  const [destinationMain, destinationSub] = formatAddress(props.destination);

  return (
    <div>
      <h5
        className="p-2 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl font-bold"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt="ride logo"
          className="h-14"
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
            <i className="ri-map-pin-2-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">{pickupMain}</h3>
              <p className="text-sm text-gray-700 -mt-1">{pickupSub}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">{destinationMain}</h3>
              <p className="text-sm text-gray-700 -mt-1">{destinationSub}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-bank-card-line text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.fare}</h3>
              <p className="text-sm text-gray-700 -mt-1">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
