import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
   {
      image: {
         type: String,
         required: true,
      },
      title: {
         type: String,
         required: true,
      },
      class: {
         type: String,
         required: true,
      },
      start_production: {
         type: Number,
         required: true,
      },
      description: {
         type: String,
         required: false,
      },
      active: {
         type: Boolean,
         default: true,
      },
   },
   {
      //options
      timestamps: true,
   }
);

//O model é o objeto onde vamos fazer as interações com o banco de dados
export default mongoose.model("Car", carSchema);
