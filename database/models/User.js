module.exports = (sequelize,dataTypes) => {
    const User = sequelize.define("User",

        {
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
            },
            state: {
                type: dataTypes.STRING
            }
        },
        {
            tableName: 'users',
            timestamps: false
        });
    return User;
}
