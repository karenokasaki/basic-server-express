// @ts-nocheck
import express from "express";
import carModel from "../model/car.model.js";

const router = express.Router();

// localhost:4000/cars
router.get("/", (req, res) => {
   // return the schema of the car
   return res.status(200).json({
      image: "string - required",
      title: "string - required",
      class: "string - required",
      start_production: "number - required",
      description: "string - optional",
      active: "boolean - default true",
   });
});

// localhost:4000/cars/all
router.get("/all", async (req, res) => {
   try {
      const cars = await carModel.find();
      return res.status(200).json(cars);
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

// localhost:4000/cars/create
router.get("/:id", async (req, res) => {
   const id_car = req.params.id;
   try {
      const car = await carModel.findById(id_car);

      if (!car) {
         return res.status(404).json({ message: "Car not found" });
      }

      return res.status(200).json(car);
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

// localhost:4000/cars/create
router.post("/create", async (req, res) => {
   const car = req.body;
   console.log(car);
   try {
      const newCar = await carModel.create(car);

      if (!newCar) {
         return res.status(400).json({ message: "Car not created" });
      }

      return res.status(201).json(newCar);
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

// localhost:4000/cars/update/:id
router.put("/update/:id", async (req, res) => {
   const id_car = req.params.id;
   const carForm = req.body;
   try {
      const updatedCar = await carModel.findByIdAndUpdate(
         id_car,
         {
            ...carForm,
         },
         {
            new: true,
            runValidators: true,
         }
      );

      if (!updatedCar) {
         return res.status(404).json({ message: "Car not found" });
      }

      return res.status(200).json(updatedCar);
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

// localhost:4000/cars/delete/:id
router.delete("/delete/:id", async (req, res) => {
   const id_car = req.params.id;
   try {
      let deletedCar = await carModel.findByIdAndDelete(id_car);

      return res.status(204).json();
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

export default router;
