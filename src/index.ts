// Pacakge Imports
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import ConnectTODB from "./config/db";
import cors from "cors";
import AuthRouter from "./routes/auth";

// Dot env Configuration
dotenv.config();

// Dot Env Variables
// Port at which backend is running.
const PORT = parseInt(process.env.PORT as string);
// Data base string
const DB_STR = process.env.DB_STR as string;

// DATA BASE Connection to DB.
ConnectTODB(DB_STR);

// App initialization
const app = express();

// Middelwares
app.use(cors());
app.use(express.json());
app.use("/api/", AuthRouter);


// Running App on PORT 8080
app.listen(PORT as number, "0.0.0.0", () =>
  console.log(`App Running on Port : http://localhost:${PORT}`)
);
