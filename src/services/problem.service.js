const sanitizeMarkdownContent = require('../utils/markdownsanitizer');

class ProblemService {

constructor(problemRepository){
    this.problemRepository = problemRepository; //injecting ProblemRepository we created above
}

async createProblem(problemData){
    
    try{
   //sanitize the markdown content before saving it to the database
    problemData.description = sanitizeMarkdownContent(problemData.description);

    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
    }
    catch(err){
        console.log('Error creating problem');
        throw err;
    }
}


 
    
}

module.exports = ProblemService;
