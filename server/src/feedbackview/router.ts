import express from "express";
import { uuidValidator } from "../../validator/feedbackCreateValidator";
import { getRequestData, schemaValidation } from "../coreutils";
import { getFeddbackData } from "./middleware";

const router = express.Router();

router.use(getRequestData, schemaValidation(uuidValidator), getFeddbackData);

export default router;
