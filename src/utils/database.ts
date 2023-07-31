import mongoose, { ConnectOptions } from 'mongoose';

let isConnected = false;

const mongooseOption: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'promptio',
};

const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('Mongoose already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, mongooseOption);

    isConnected = true;
  } catch (error) {
    throw error;
  }
};

export { connectToDB };
