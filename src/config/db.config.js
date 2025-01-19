const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDB() {

try{

    if(NODE_ENV === 'development'){
        await mongoose.connect(ATLAS_DB_URL);
     }
     else{
         await mongoose.connect('some other db url');
     }
}
catch(err){
console.log('Error connecting to DB');
console.log(err);
}
}

module.exports = connectToDB;