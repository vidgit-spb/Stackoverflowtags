require('dotenv').config();

const DEFAULT_PORT   = 8000;
const DEFAULT_ADDRESS = 'localhost';
const MAX_ITEMS = 283;

module.exports = {

    port:   process.env.PORT || DEFAULT_PORT,
    address:  process.env.ADDRESS || DEFAULT_ADDRESS,
    key: process.env.ACCESS_KEY,
    token: process.env.ACCESS_TOKEN,
    max_items:process.env.MAX_ITEMS||MAX_ITEMS

};
