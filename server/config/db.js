import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log(`Connected DB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connect to DB: ${error.message}`);
  }
}

export default connectDB;