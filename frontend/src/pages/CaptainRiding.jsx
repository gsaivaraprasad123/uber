import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-3 top-3 flex items-center justify-between w-screen">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="map"
          className="w-16"
        />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex  items-center justify-center rounded-full "
        >
          <i className="ri-logout-box-r-line text-lg font-semibold "></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="h-1/5 p-6 flex flex-col justify-center items-center relative"
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5
          className="p-2 text-center absolute top-0  w-[93%]"
          onClick={() => {}}
        >
          <i className="ri-arrow-down-wide-line text-3xl font-bold"></i>
        </h5>{" "}
        <h4 className="text-xl font-semibold">4 Km away</h4>
        <button
          className="w-full bg-black text-white font-semibold p-3 rounded-xl text-lg mt-5"
          onClick={() => {}}
        >
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full  z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
