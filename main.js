// @ts-nocheck
import express from "express";
import cors from "cors";
import connectDB from "./config/db.config.js";

/* routes */
import carsRouter from "./routes/cars.route.js";
import restaurantsRouter from "./routes/restaurants.route.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
   return res.status(200).json({ message: "Server working fine" });
});

app.use("/cars", carsRouter);
app.use("/restaurants", restaurantsRouter);

app.listen(4000, () => {
   console.log("Server is running on port 4000");
   try {
      connectDB();
   } catch (error) {
      console.log("Something went wrong on connection with DB", error);
   }
});
