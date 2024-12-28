import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDb = async () => {
  mongoose.set("strictQuery", true); // Enable strict query mode
  
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt", // Name of your database
      useNewUrlParser: true, // Enables the new URL parser
      useUnifiedTopology: true, // Enables the new server discovery and monitoring engine
    });

    isConnected = true; // Update the connection status
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
