const Option = require('../../models/options');

// delete the Option
module.exports.deleteOption = async (req,res)=>{

    try {
        let findOption = await Option.findById(req.params.id);
        if(findOption.votes !=0){
            return res.status(500).json({
                Error: "Can't delete option!!"
            });
        }
        await Option.deleteOne(findOption);
        return res.status(200).json({
            Message:"option has been deleted!!"
        });
    } catch (err) {
        return res.status(404).json({
            Error:"Invalid options!"
        });
    }
}

// increment the vote 
module.exports.incrementVote = async (req,res)=>{
    Option.updateOne({_id:req.params.id}
        ,{
            $inc:{
                votes:1
            }
        },function(err,result){
            if(err){
                return res.json(404,{
                    message:'Invalid Id'
                })
            }

            return res.json(200,{
                message:'Updated Successfully!'
            });
        });
}
