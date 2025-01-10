const express = require('express');

const { ProblemController } = require('../../../controllers/index'); //no need to add index.js as we are accessing it from index.js in routes/v1/index.js

const problemRouter = express.Router();

problemRouter.get('/:id', ProblemController.getProblem);
problemRouter.get('/', ProblemController.getProblems);
problemRouter.post('/', ProblemController.addProblem);
problemRouter.put('/:id', ProblemController.updateProblem);
problemRouter.delete('/:id', ProblemController.deleteProblem);


module.exports = problemRouter;