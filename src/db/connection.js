const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const URL = process.env.DB_URL;

mongoose.connect(URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('connection successful');
}).catch((e) => {
  console.log('connection unsuccessful'+e);
});

// mongoose.connect(URL,(err)=>{
//   if(err){
//     console.error('Error in DB connection : '+JSON.stringify(err,undefined,2));
//   }else{
//     console.log('DB connected successfully.');
//   }
// });


module.exports = mongoose;
