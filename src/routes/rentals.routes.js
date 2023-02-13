import { Router } from "express";
import { create, exclude, finish, list } from "../controllers/rentals.controllers.js";
import { idParamSanitization } from "../middlewares/generic.middlewares.js";
import { createRentalValidation } from "../middlewares/rentals.middlewares.js";

const router = Router()

router.get("/rentals", list)
router.post("/rentals", createRentalValidation, create)
// router.post("/rentals/:id/return", idParamSanitization, finishRentalValidation, finish)
// router.delete("/rentals/:id", idParamSanitization, exclude)


export default router