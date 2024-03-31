const mongoose = require("mongoose");
 
const connection = mongoose.connect("mongodb+srv://amit:qmit@cluster0.gui12rn.mongodb.net/noteapp");

module.exports={connection};