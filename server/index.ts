import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import cors from "cors";
const app: Express = express();
const port = process.env.PORT || 9000;
const router = express.Router();
import feedBackRoutes from "./src/routes";

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (_: Request, res: Response) => {
  res.send("Testing Feedback Server");
});

router.use("/api", feedBackRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
