const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
require('dotenv').config();
const app = express();

app.use(cors());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
