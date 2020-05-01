// require the express 
const express = require('express');
const router = express.Router();

// using the routes questions and options
router.use('/questions',require('./question'));
router.use('/options',require('./option'));

// testing the route is working or not
console.log('yes i"m the index route');


// export the router
module.exports = router;


