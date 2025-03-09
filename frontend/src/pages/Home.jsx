import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Home = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);

  const { user } = useContext(UserDataContext);
  console.log(user);

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestions(response.data);
    } catch {
      // handle error
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch {
      // handle error
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          duration: 0.5,
          ease: "easeInOut",
          padding: 24,
          // opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          duration: 0.5,
          ease: "easeInOut",
          padding: 0,
          // opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  //vehicle panel control
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  //confirm ride panel control
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );
  //Looking for driver
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  //Waiting for driver
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  const findTrip = async () => {
    // API call to find a trip
    // Update state based on response
    setVehiclePanel(true);
    setPanelOpen(false);

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: { pickup, destination },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);

    setFare(response.data);
  };

  const createRide = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup,
        destination,
        vehicleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber logo"
        className="w-16 absolute left-5 top-5"
      />
      <div className="h-screen w-screen">
        {/* temporary image */}
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div
          className={`h-[30%] p-6 bg-white relative ${
            panelOpen ? "" : "rounded-3xl"
          }`}
        >
          <h5
            className="absolute top-4 right-4 text-3xl font-extrabold opacity-0"
            onClick={() => {
              setPanelOpen(false);
            }}
            ref={panelCloseRef}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={pickup}
              type="text"
              placeholder="Add a pick-up location"
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5"
              onChange={handlePickupChange}
              onClick={() => {
                setPanelOpen(true);
                setActiveField("pickup");
              }}
            />
            <input
              value={destination}
              type="text"
              placeholder="Add a drop-off location"
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3"
              onChange={handleDestinationChange}
              onClick={() => {
                setPanelOpen(true);
                setActiveField("destination");
              }}
            />
          </form>
          <button
            className="bg-black text-white px-4 py-2 rounded-lg w-full mt-3 flex items-center justify-center"
            onClick={findTrip}
          >
            Find trip <ArrowRight className="ml-2" />
          </button>
        </div>
        <div className="bg-white h-0 " ref={panelRef}>
          <LocationSearchPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-14 translate-y-full"
      >
        <VehiclePanel
          selectVehicle={setVehicleType}
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
          fare={fare}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
          setVehicleFound={setVehicleFound}
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare[vehicleType]}
          vehicleType={vehicleType}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
      >
        <LookingForDriver
          setVehicleFound={setVehicleFound}
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare[vehicleType]}
          vehicleType={vehicleType}
        />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 "
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
