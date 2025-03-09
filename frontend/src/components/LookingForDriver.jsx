import React from "react";

const LookingForDriver = (props) => {
  const vehicleImages = {
    moto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
    auto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
    default:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png",
  };

  const selectedVehicleImage =
    vehicleImages[props.vehicleType] || vehicleImages.default;

  // Function to format address into two parts (main & sub)
  const formatAddress = (address) => {
    if (!address) return ["", ""];
    const index = address.indexOf(",");
    if (index === -1) return [address, ""];
    return [address.substring(0, index), address.substring(index + 1).trim()];
  };

  // Destructuring formatted addresses
  const [pickupMain, pickupSub] = formatAddress(props.pickup);
  const [destinationMain, destinationSub] = formatAddress(props.destination);

  return (
    <div>
      <h5
        className="p-2 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl font-bold"></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-5">Looking for Driver</h3>
      <div className="flex justify-between items-center flex-col gap-3">
        <img src={selectedVehicleImage} alt="ride logo" className="h-20" />
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

export default LookingForDriver;
