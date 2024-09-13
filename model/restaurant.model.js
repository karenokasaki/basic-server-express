import mongoose from "mongoose";

const sampleRestaurantSchema = new mongoose.Schema({
   address: {
      building: String,
      coord: [Number], // Array de números (latitude e longitude)
      street: String,
      zipcode: String,
   },
   borough: String,
   cuisine: String,
   grades: [
      {
         date: Date, // O Mongoose já entende que isso é um formato de data
         grade: String,
         score: Number,
      },
   ],
   name: String,
   restaurant_id: String,
});

const SampleRestaurant = mongoose.model("Restaurant", sampleRestaurantSchema);

export default SampleRestaurant;
