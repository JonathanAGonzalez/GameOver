module.exports = (sequelize,dataTypes) => {
    const User = sequelize.define("User",
    
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
    },
    {
        tableName: "users",
        timestamps: false
    });

    //Asocio la tabla games con la tabla categories para que me traiga los campos de la columna category_id
    //Al ser uno a uno se usa el belongsTo (un juego tiene una categoria)
    User.associate = function(models) {
        User.belongsTo(models.Cart, {
            as: "carts",
            foreignKey: "user_id"
        });

        }

    return User;
}



/* module.exports = function(sequelize, dataTypes) {


    cols = {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            first_name: {
                type: dataTypes.STRING
            },
            last_name: {
                type: dataTypes.STRING
            },
            email: {
                type: dataTypes.STRING
            },
            password: {
                type: dataTypes.STRING
            },
            avatar: {
                type: dataTypes.STRING
            }
        },
        config = {
            tableName: 'users',
            timestamps: false
        }


    const user = sequelize.define("users", cols, config);
    return user;

} */