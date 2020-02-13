const DEFAULT_PORT   = 8000;
const DEFAULT_ADDRESS = 'localhost';

module.exports.port     = process.env.PORT || DEFAULT_PORT;
module.exports.address   = process.env.ADDRESS || DEFAULT_ADDRESS; 