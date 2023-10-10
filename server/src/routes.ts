import express from "express";

import feedBackSubmitController from "./feedbacksubmit/router";

const router = express.Router();

router.post("/feedback/submit", feedBackSubmitController);

export default router;
