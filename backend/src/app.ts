import express, { Request, Response } from "express";
import cors from "cors";
import myUserRoute from "./routes/user.route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.get("/test", async (req: Request, res: Response) => {
  res.json({
    message: "hello",
  });
});

export default app;
