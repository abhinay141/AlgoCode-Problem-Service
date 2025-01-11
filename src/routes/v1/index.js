const express = require('express');
const problemRouter = require('./problems.routes');
const v1Router = express.Router();
v1Router.use('/problems', problemRouter); // /problems will call all '/' routes from problems.routes.js and if there is id then it will call '/:id' routes from problems.routes.js
module.exports = v1Router;






