const {EntitySchema} = require("typeorm");

const loginSchema = new EntitySchema({
    name: "Login",
    tableName: "login",
    columns: {
        username:{
            type: "varchar",
            primary:true,   
            length:50,
        },
        password:{
            type: "varchar",
            length:255,
            nullable:false,
        }
    }
})
module.exports = loginSchema;
