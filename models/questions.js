const mongoose = require('mongoose');

// Schema for Questions

const QuestionSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    options:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Option'
    }]
},{
    timestamps:true
});



const Question = mongoose.model('Question',QuestionSchema);

module.exports = Question;