import axios from "axios";

const getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  if (!apiKey) {
    throw new Error("Google API Key is missing. Check your .env file.");
  }

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address.trim()
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log("Google API Response:", response.data); // Debugging

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return { ltd: location.lat, lng: location.lng };
    } else {
      console.error("Google API Error:", response.data);
      throw new Error("Google API Error: " + response.data.status);
    }
  } catch (error) {
    console.error("Axios Error:", error.message);
    throw error;
  }
};

const getDistanceAndTimeService = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getAutoCompleteSuggestionsService = async (input) => {
  if (!input) {
    throw new Error("Query is required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.predictions
        .map((prediction) => prediction.description)
        .filter((value) => value);
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export {
  getAddressCoordinate,
  getDistanceAndTimeService,
  getAutoCompleteSuggestionsService,
};
