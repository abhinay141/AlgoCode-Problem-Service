const dotenv = require('dotenv');

dotenv.config(); // to use environment variables

module.exports = {
    PORT: process.env.PORT
}