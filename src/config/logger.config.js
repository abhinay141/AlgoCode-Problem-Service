const winston = require('winston');
require('winston-mongodb');//to log the messages in mongodb



const allowedTransports = [];

// The below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({ //if we don't write our own format, it will use the default format below
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

// The below transport configuration enables logging in the mongodb, create a new cluster in mongodb atlas and copy the connection string, require winston-mongodb on top
allowedTransports.push(new winston.transports.MongoDB({
    db: process.env.LOG_DB_URL, //connection string
    collection: 'logs', //collection name in the db
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    )
}));

// The below transport configuration enables logging in the file
allowedTransports.push(new winston.transports.File({
    filename: 'logs.log', //creates a file named logs.log in the root directory and logs the messages on it's own
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    )
}));



const logger = winston.createLogger({
    // default formatting

    format: winston.format.combine(
        // First argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;