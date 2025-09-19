import mongoose  from 'mongoose';


const conn = async () => {
    console.log('Wait connecting to the database...')
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Atlas Connected.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default conn;

