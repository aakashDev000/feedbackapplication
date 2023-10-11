import express from "express";

import feedBackSubmitController from "./feedbacksubmit/router";
import feedBackViewControler from "./feedbackview/router";

const router = express.Router();

router.post("/feedback/submit", feedBackSubmitController);
router.get("/feedback/view", feedBackViewControler);

export default router;
