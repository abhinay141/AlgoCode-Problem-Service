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

async getAllProblems(){

    try{
        const problems = await Problem.find({});
        return problems;
    
    }
    catch(err){
        console.log('Error getting problems');
        throw err;
    }
    


    }

    async getProblemById(id){
        try{
            const problem = await Problem.findById(id);
            return problem;
        
        }
        catch(err){
            console.log('Error getting problem by id');
            throw err;
        }
    }
    
}

module.exports = ProblemRepository;