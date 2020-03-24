import dot from 'dotenv'
dot.config();


const DEFAULT_PORT   = 8000;
const DEFAULT_ADDRESS = 'localhost';
const maxItems = 500;
const key = process.env.ACCESS_KEY;
const token = process.env.ACCESS_TOKEN;

export default  {

    port:   process.env.PORT || DEFAULT_PORT,
    address:  process.env.ADDRESS || DEFAULT_ADDRESS,
    key: key,
    token: token,
    maxItems: process.env.maxItems||maxItems

};
