import userRoutes from '../routes/userRoutes.js';

const routes = app => {
  app.use('/api/v1/auth', userRoutes);
}

export default routes;
