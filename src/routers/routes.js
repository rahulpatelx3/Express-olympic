const express = require('express');
const { getData, setData, getDataById, updateData, deleteData } = require('../controllers');
const router = express.Router();

//getting the data
router.get("/",getData);

//creating new data
router.post("/",setData);

//getting the data by id
router.get("/:id",getDataById);

//updating the data by id
router.put("/:id",updateData);

//deleting the data by id
router.delete("/:id",deleteData);

module.exports=router;