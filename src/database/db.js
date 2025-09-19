import mongoose  from 'mongoose';

const conn = async () => {
    console.log('Wait connecting to the database.')
  try {
    await mongoose.connect('mongodb+srv://antoniopagliacci:joa1IfJGZpkok1OO@api-breaking-news.qegxge0.mongodb.net/');
    console.log("MongoDB Atlas Connected.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default conn;

