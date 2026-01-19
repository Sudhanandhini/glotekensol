import dotenv from "dotenv";
dotenv.config();   // MUST BE FIRST LINE

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import careerRoutes from "./routes/career.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
