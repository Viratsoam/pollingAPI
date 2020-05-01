// Require the model Schema of Options and Questions
const Question = require('../../models/questions');
const Options = require('../../models/options');
var url = require('url');
// create the new Question
module.exports.createQuestion = async (req,res)=>{
    // console.log(req,body);
    try{
        // Question title
        let questionTitle = await Question.create({
            title: req.body.title
        });
        return res.status(200).json({
            Message: "Question has been created!!",
            data:{
                question:questionTitle
            }
        });
    }catch(err){
        console.log(`Error:${err}`);
        return res.status(500).json({
            Error:"Internal Server Error"
        });
    }
}

// delete the Question
module.exports.deleteQuestion = async (req,res)=>{
    try{
        let findQuestionWithId = await Question.findById(req.params.id);
        findQuestionWithId.remove();
        return res.status(200).json({
            Message:"Question has been deleted!"
        });
    }catch(err){
            return res.status(500).json({
                Error:"Oop's Internal Server Error"
            });
    }
}
// Create the option for the Question
module.exports.createOptions = async (req,res)=>{
    try {
     const linkOption = req.body;
    //  TODO: need some changes
    //  linkOption.link =  function fullUrl(req) {
    //     return url.format({
    //       protocol: req.protocol,
    //       host: req.get('host'),
    //       pathname: req.originalUrl
    //     });
    //   }
    linkOption.link = 'http://localhost:8000/options/'+req.params.id+'/add_vote';
      let options = await Options.create({
          text:linkOption.text,
          votes:linkOption.votes,
          link_to_votes:linkOption.link
      });
      let question = await Question.findById(req.params.id);
        question.options.push(options);
        question.save();
        return res.json(200,{
            message:'Options hase been save in question!',
            data:question
        }); 
    }catch (err) {
        console.log('err',err);
        return res.status(500).json({
            Error:'Internal Server Error'
        });
    }
}

// display the Question
module.exports.showQuestions = async (req,res)=>{
    console.log(req.params);
    try{
        let question = await Question.findById(req.params.id);
        return res.status(200).json({
            qn: question
        });
    }catch(err){
        if(err){
            return res.status(404).json({
                Error:"Invalid user!"
            });
        }
    }

}