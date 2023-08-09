import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongoose already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "promptio",
    } as Object);

    isConnected = true;

    console.log("Mongoose connected");
  } catch (error) {
    throw error;
  }
};

export { connectToDB };
