import { validationResult } from "express-validator";
import {
  getAddressCoordinate,
  getAutoCompleteSuggestionsService,
  getDistanceAndTimeService,
} from "../services/maps.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getCoordinates = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query; // ✅ Extract address properly

  if (!address) {
    return res
      .status(400)
      .json({ message: "Address query parameter is required" });
  }

  try {
    const coordinates = await getAddressCoordinate(address.trim()); // ✅ Ensure proper input
    res.status(200).json(coordinates);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Coordinates not found", error: error.message });
  }
});

const getDistanceAndTime = asyncHandler(async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;

    const distanceTime = await getDistanceAndTimeService(origin, destination);

    res.status(200).json(distanceTime);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

const getAutoCompleteSuggestions = asyncHandler(async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { input } = req.query;

    const suggestions = await getAutoCompleteSuggestionsService(input);

    res.status(200).json(suggestions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { getCoordinates, getDistanceAndTime, getAutoCompleteSuggestions };
