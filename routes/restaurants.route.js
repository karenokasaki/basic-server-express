// @ts-nocheck
import express from "express";
import SampleRestaurant from "../model/restaurant.model.js";
import data from "../dataFormatted.js";

const router = express.Router();

// localhost:4000/restaurants
router.get("/", (req, res) => {
   return res.status(200).json({
      message: "Welcome to the restaurants API",
   });
});

// localhost:4000/restaurants/all
router.get("/all", async (req, res) => {
   try {
      const restaurants = await SampleRestaurant.find().limit(200);
      return res.status(200).json(restaurants);
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

// localhost:4000/restaurants/create
router.post("/create", async (req, res) => {
   const restaurant = req.body;
   try {
      const newRestaurant = await SampleRestaurant.create(restaurant);

      if (!newRestaurant) {
         return res.status(400).json({ message: "Restaurant not created" });
      }

      return res.status(201).json(newRestaurant);
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

// localhost:4000/restaurants/update/:id
router.put("/update/:id", async (req, res) => {
   const id_restaurant = req.params.id;
   const restaurantForm = req.body;
   try {
      const updatedRestaurant = await SampleRestaurant.findByIdAndUpdate(
         id_restaurant,
         {
            ...restaurantForm,
         },
         {
            new: true,
            runValidators: true,
         }
      );

      if (!updatedRestaurant) {
         return res.status(400).json({ message: "Restaurant not found" });
      }

      return res.status(200).json(updatedRestaurant);
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

// localhost:4000/restaurants/delete/:id
router.delete("/delete/:id", async (req, res) => {
   const id_restaurant = req.params.id;
   try {
      const deletedRestaurant = await SampleRestaurant.findByIdAndDelete(
         id_restaurant
      );

      if (!deletedRestaurant) {
         return res.status(404).json({ message: "Restaurant not found" });
      }

      return res.status(200).json({ message: "Restaurant deleted" });
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

// localhost:4000/restaurants/:id
router.get("/:id", async (req, res) => {
   const id_restaurant = req.params.id;
   try {
      const restaurant = await SampleRestaurant.findById(id_restaurant);

      if (!restaurant) {
         return res.status(404).json({ message: "Restaurant not found" });
      }

      return res.status(200).json(restaurant);
   } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error });
   }
});

export default router;
