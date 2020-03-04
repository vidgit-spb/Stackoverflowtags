"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DEFAULT_PORT = 8000;
const DEFAULT_ADDRESS = 'localhost';
const maxItems = 28;
const key = process.env.ACCESS_KEY;
const token = process.env.ACCESS_TOKEN;
exports.default = {
    port: process.env.PORT || DEFAULT_PORT,
    address: process.env.ADDRESS || DEFAULT_ADDRESS,
    key: key,
    token: token,
    maxItems: process.env.maxItems || maxItems
};
