import express from "express";
import { getRequestData, schemaValidation } from "../coreutils";
import { feedbackSubmitionValidator } from "../../validator/feedbackCreateValidator";
import { insertFeddbackData } from "./middleware";

const router = express.Router();

router.use(
  getRequestData,
  schemaValidation(feedbackSubmitionValidator),
  insertFeddbackData
);

export default router;
