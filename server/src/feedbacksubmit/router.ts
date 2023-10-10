import express from "express";
import { getRequestData, schemaValidation } from "../coreutils";

import { feedbackSubmitionValidator } from "../../validator/feedbackCreateValidator";

const router = express.Router();

router.use(getRequestData, schemaValidation(feedbackSubmitionValidator));

export default router;
