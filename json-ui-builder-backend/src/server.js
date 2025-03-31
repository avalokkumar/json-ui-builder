const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const appConfig = require('./config/appConfig');
const uiRoutes = require('./routes/uiRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const userController = require('./controllers/userController');

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/ui', uiRoutes);
app.use('/api/user', userRoutes); // This already includes CRUD routes

// Removed redundant CRUD endpoint definitions for users

app.use(errorHandler);

app.listen(appConfig.port, () => {
  console.log(`Server running on port ${appConfig.port}`);
});
