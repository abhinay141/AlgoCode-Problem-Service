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

async function getProblem(req, res, next) {

    try{
        const problem = await problemService.getProblemById(req.params.id); //req.params.id will get the id from the url
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Problem fetched successfully',
            error : {},
            data: problem

        })
        
    }
    catch(err){
        console.log(err); //log the errors
        next(err);
    
    }
}

async function getProblems(req, res, next) {

    try{
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'all Problems fetched successfully',
            error : {},
            data: problems

        })
        
    }
    catch(err){
        console.log(err); //log the error
        next(err);
    
    }
}

function deleteProblem(req, res, next) {
    res.send('Delete problem logic here');
}

async function updateProblem(req, res, next) {

    try{
        const updatedProblem = await problemService.updateProblemById(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Problem updated successfully',
            error : {},
            data: updatedProblem

        })
        
    }
    catch(err){
        next(err);
    
    }
}

async function deleteProblem(req, res, next) {

    try{
        const deletedProblem = await problemService.deleteProblemById(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Problem deleted successfully',
            error : {},
            data: deletedProblem

        })
        
    }
    catch(err){
        next(err);
    
    }
}
module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
};