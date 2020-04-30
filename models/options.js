const mongoose = require('mongoose');

// Schema for options
const OptionSchema = new mongoose.Schema({
    text:{
        type:String,
        required:ture
    },
    votes:{
        type:Number
    },
    link_to_votes:{
        type:String
    }
},{
    timestamps:true
});



const Option = mongoose.model('Option',OptionSchema);


module.exports = Option;