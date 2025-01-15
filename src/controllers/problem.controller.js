const NotImplemented = require("../errors/notImplemented.error");

function addProblem(req, res, next) {

    try{
        //nothing implemented yet
        throw new NotImplemented('addProblem');
    }
    catch(err){
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