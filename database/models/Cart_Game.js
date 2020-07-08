module.exports = (sequelize,DataTypes) => {
    const Cart_Game = sequelize.define("Cart_Game",
    
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: {
            type: DataTypes.INTEGER
        },
        game_id: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: "cart_game",
        timestamps: false
    });

Cart_Game.associate = function(models) {
    Cart_Game.belongsTo(models.Cart, {
        as: "carts",
        foreignKey: "cart_id"
    });
}
Cart_Game.associate = function(models) {
    Cart_Game.belongsTo(models.Game, {
        as: "games",
        foreignKey: "game_id"
     });

 }

return Cart_Game;
}



