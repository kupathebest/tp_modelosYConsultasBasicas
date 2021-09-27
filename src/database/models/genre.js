module.exports = (sequelize, DataTypes) => {

    const alias = "Genero"

    const cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type : DataTypes.BOOLEAN,
            defaultValue : 1,
            allowNull : false
        }
    }

    const config = {
        tableName : 'genres', // si la tabla no coincide con el plural hay que hacer esta config
        timestamp : true, // si no tiene timestamps va false
        underscored : true, //si esta escrito con _ y no en camelCase
    }

    const Genre = sequelize.define(alias, cols, config)
    return Genre
}