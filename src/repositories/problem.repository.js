const { Problem } = require('../models/index'); //importing the problem object we created above

class ProblemRepository {

async createProblem(problemData){
 
try{
        const problem = await Problem.create({
            title: problemData.title,
            description: problemData.description,
            testCases: (problemData.testCases) ? problemData.testCases : [],
         
        });
        return problem;

}
catch(err){
    console.log('Error creating problem');
    throw err;


}

}
}

module.exports = ProblemRepository;