const express = require('express');
const app = express();
const cors = require('cors');
const videoRoutes = require('./videosRoutes');

//middleware
app.use(cors());
app.use(express.json());

//routes 
app.use("/videos", videoRoutes);

require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Server running on ${port}`)});