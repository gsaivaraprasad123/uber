import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  // console.log(props);

  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
  };

  return (
    <div className="-my-10 h-full overflow-y-auto hide-scrollbar ">
      {suggestions.map((elem, idx) => (
        <div
          onClick={() => {
            handleSuggestionClick(elem);
            // setVehiclePanel(true);
            // setPanelOpen(false);
          }}
          className="flex items-center justify-start gap-8 my-2 p-3 border-2 rounded-xl border-white active:border-gray-800 "
          key={idx}
        >
          <h2 className="bg-[#eee] h-10 w-20 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill text-lg"></i>
          </h2>
          <h4 className="font-medium">{elem} </h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
