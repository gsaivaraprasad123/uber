import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);

  //Sample Array for dynamic
  const locations = [
    "24B, Near Cafe Coffee Day, Elegant factories, Hyderabad",
    "28A, Near SBI, Gayathri Electricals, RP Road, Secunderabd",
    "36, Near Gurudwara, Sri Ram Mandir, Uppal, Hyderabad",
    "45, Near Ashoka, Bangalore, Indiranagar, Bangalore",
    "56, Near Sahara, Bangalore, Karnataka, Bangalore",
    "67, Near Guru Nanak, Bangalore, Karnataka, Bangalore",
    "78, Near MG Road, Shivaji Nagar, Bangalore",
    "89, Near City Center, Banjara Hills, Hyderabad",
    "90, Near Infosys, Electronic City, Bangalore",
  ];
  return (
    <div className="-my-10 h-full overflow-y-auto hide-scrollbar ">
      {/* Sample Data */}
      {locations.map((elem, idx) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center justify-start gap-8 my-2 p-3 border-2 rounded-xl border-white active:border-gray-800 "
            key={idx}
          >
            <h2 className="bg-[#eee] h-10 w-20 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-lg"></i>
            </h2>
            <h4 className="font-medium">{elem} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
