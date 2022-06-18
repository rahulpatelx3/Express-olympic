const MensRanking = require('../models/mens');

const getData = async (req,res) => {
  try {
    let data = await MensRanking.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: `something went wrong. ERROR : ${error}`});
  }
};

const setData = async (req,res) => {
  try {
    let data = await MensRanking.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: `something went wrong. ERROR : ${error}`});
  }
};

const getDataById = async (req,res) => {
  try{
    const data = await MensRanking.findById(req.params.id);
    if(!data){
      res.status(404).json({message: `No data found with ID : ${req.params.id}`});
      return;
    }
    res.status(200).json(data);
  }
  catch(error){
    res.status(400).json(error);
  }
};

const updateData = async (req,res) => {
  try {
    let data = await MensRanking.findByIdAndUpdate({
      "_id": req.params.id
    },
    {
      $set: req.body
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteData = async (req,res) => {
  try {
    await MensRanking.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: `data deleted successfully with Id : ${req.params.id}`
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getData, setData, getDataById, updateData, deleteData };