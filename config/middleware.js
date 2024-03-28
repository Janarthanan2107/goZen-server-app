const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

module.exports = function(app) {
    app.use(morgan('combined'));
    app.use(helmet());
    app.use(cors());
};
