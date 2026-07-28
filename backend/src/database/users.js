require('dotenv').config();

const { DataSource } = require('typeorm');
const userSchema = require('../entities/userObject');
const loginSchema = require('../entities/loginObject');

const AppDataSource = new DataSource({
    type: process.env.type,
    host: process.env.host,
    port: Number(process.env.port),
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    entities: [userSchema, loginSchema],
})
module.exports=AppDataSource;