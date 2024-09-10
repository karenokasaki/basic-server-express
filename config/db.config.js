import mongoose from "mongoose";

async function connect() {
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("DB Connected");
   } catch (error) {
      console.log("Something went wrong", error);
   }
}

export default connect;
