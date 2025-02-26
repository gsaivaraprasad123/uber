import { validationResult } from "express-validator";
import { asyncHandler } from "../utils/asyncHandler.js";
import { createRideService } from "../services/ride.service.js";

const createRide = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { userId, pickup, destination, vehicleType } = req.body;

  try {
    const ride = await createRideService({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    return res.status(201).json(ride);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const getFare = asyncHandler(async (req, res) => {});

export { createRide, getFare };
