import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import bootstrapApp from './startUp/bootstrapApp.js';

dotenv.config();

connectDB();

const app = express();

bootstrapApp(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

