const sanitizeMarkdownContent = require('../utils/markdownsanitizer');

class ProblemService {

constructor(problemRepository){
    this.problemRepository = problemRepository; //injecting ProblemRepository we created above
}

async createProblem(problemData){
    
    try{
   //sanitize the markdown content before saving it to the database
    problemData.description = sanitizeMarkdownContent(problemData.description);

    const problem = await this.problemRepository.createProblem(problemData); // this.problemRepository is the instance variable declared inside the constructor
    
    return problem;
    }
    catch(err){
        console.log('Error creating problem');
        throw err;
    }
}

async getAllProblems(){

 const problems = await this.problemRepository.getAllProblems();
    return problems; //no need of try catch block as any error thrown by repository will be sent to service and then to controller

}

async getProblemById(id){
    const problem = await this.problemRepository.getProblemById(id);
    return problem;
}

async updateProblemById(id, problemData){
    try{
        const problem = await this.problemRepository.updateProblemById(id, problemData);
        return problem;
    }
    catch(err){
        throw err;
    }
}

async deleteProblemById(id){
        const problem = await this.problemRepository.deleteProblemById(id);
        return problem;
   
}


    


 
    
}

module.exports = ProblemService;
