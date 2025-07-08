import express, { Request, Response } from "express";
import cors from "cors";
import search from "./routes/search"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Testing is Working Fine from Server",
  });
  console.log("Testing is working fine");
});
app.use("/api/v1/",search)



export default app;
