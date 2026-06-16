import express from 'express';
// import itemRoutes from './routes/itemRoutes';
import errorHandler from './middlewares/errorHandler.js';
import mongoose from 'mongoose';

// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

await mongoose
  .connect(
    process.env.MONGODB_URI ||
      'mongodb+srv://bnovidal_db_user:AnjrrJKW2HQf7htd@dndbackenddb.aaczyvi.mongodb.net/?appName=DndBackendDB',
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

app.use(express.json());

// Routes
// app.use('/api/items', itemRoutes);
app.use('/', (req, res) => {
  res.json({ message: 'Welcome to the DnD API!' });
});

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
