const mongoose = require('mongoose');
const ProblemSchema = new mongoose.Schema({

title: {
    type: String,
    required: [true, 'Title cannot be empty']
},

description: {
    type: String,
    required: [true, 'Description cannot be empty']
},

difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: [true, 'Difficulty cannot be empty'],
    default: 'easy'
},

testCases :
[ //array of objects: [{input: '1 2', output: '3'}, {input: '2 3', output: '5'}]
 
{


    input: {
        type: String,
        required: [true, 'Input cannot be empty']
    },

    output: {
        type: String,
        required: [true, 'Output cannot be empty']
    }
}

],

editorial: {
    type: String,
    
},

    });

    const Problem = mongoose.model('Problem', ProblemSchema); //Problem is the name of the collection in the database

    module.exports = Problem; //export the problem object, we can use this object to perform CRUD operations on the 'Problem' collection in the database