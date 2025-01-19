const NotImplemented = require("../errors/notImplemented.error");
const { ProblemService } = require('../services/index');
const { ProblemRepository } = require('../repositories/index');
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next) {

    try{
        
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Problem created successfully',
            error : {},
            data: newproblem
            

        })
        
    }
    catch(err){
        console.log(err);
        next(err);
    
    }
}

function getProblem(req, res, next) {
    res.send('Get single problem logic here');
}

function getProblems(req, res, next) {
    res.send('Get all problems logic here');
}

function deleteProblem(req, res, next) {
    res.send('Delete problem logic here');
}

function updateProblem(req, res, next) {
    res.send('Update problem logic here');
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
};