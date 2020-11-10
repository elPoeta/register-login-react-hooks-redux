import express from 'express';
import cors from 'cors';
import { errorHandler, notFound } from '../middlewares/errorHandler.js';

const bootstrapApp = app => {
  app.use(express.json())
  app.use(cors());
  app.use((req, res, next) => {
    res.setHeader('charset', 'utf-8')
    next();
  });
  app.use(notFound);
  app.use(errorHandler);
}

export default bootstrapApp;