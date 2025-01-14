class BaseError extends Error {
    constructor(name, statusCode, description, details) {
       super(description); // calling the constructor of Error class using super() because Error class has no default constructor/no argument constructor
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
        
    }
}

module.exports = BaseError;