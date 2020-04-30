const express = require('express');
const router = express.Router();


const {deleteOption,incrementVote} = require('../controller/api/option');


//  Route for Delete the option
router.delete('/:id/delete',deleteOption);


// Route for increment the vote
router.post('/:id/add_vote', incrementVote);


// export the router
module.exports = router;