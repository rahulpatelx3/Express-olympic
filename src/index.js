const express = require('express');
const dotenv = require('dotenv').config();
const connection  = require('../src/db/connection');
const router = require('./routers/routes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(PORT,() => {
  console.log(`Running on Port : ${PORT}`);
});