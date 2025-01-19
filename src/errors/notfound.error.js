const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(resourceName, resourceValue) {
        super(
            "Not Found", 
            StatusCodes.NOT_FOUND, 
            `The requested resource ${resourceName} with value ${resourceValue} was not found`, 
            {
                resourceName,
                resourceValue //these will be sent as error details error: {resourceName: 'problem', resourceValue: '123'}
            }
        );
    }
}

module.exports = NotFound;
