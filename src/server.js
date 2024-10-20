const app = require('./app');
const connectDB = require('./config/database');
const scheduler = require('./utils/scheduler');

require('dotenv').config();
connectDB();

scheduler;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
