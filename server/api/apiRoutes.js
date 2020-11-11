import userRoutes from '../routes/userRoutes.js';

const routes = app => {
  app.use('/api/v1', userRoutes);
}

export default routes;
