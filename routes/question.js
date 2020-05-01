// require express
const express = require('express');
const router = express.Router();

// require all the controllers for question
const {createQuestion, deleteQuestion, createOptions, showQuestions} = require('../controller/api/question');


// route to create the question
router.post('/create',createQuestion);
// route to delete the question
router.delete('/:id/delete',deleteQuestion);
// route to create the options for question
router.post('/:id/options/create',createOptions);
// route to view the question
router.get('/:id',showQuestions);

// export the routers
module.exports = router;