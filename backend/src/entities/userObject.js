const {EntitySchema} = require("typeorm");

const userSchema = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        username: {
            type: "varchar",
            primary: true,
            length: 50,
        },
        email:{
            type: "varchar",
            length:50,
            nullable:false,
        },
        name:{
            type: "varchar",
            length:50,
            nullable:false,
        },
        

    },
    relations: {
        login: {
            type: "one-to-one",
            target: "Login",
            joinColumn: {
                name: "username",
                referencedColumnName: "username",
            },
        }
    }
})
module.exports = userSchema;

