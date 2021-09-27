module.exports = (sequelize, DataTypes) => {

    const alias = 'Pelicula'

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true           
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull : false
        },
        rating: {
            type: DataTypes.DECIMAL(3.1).UNSIGNED,
            allowNull : false
        },
        awards: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull : false
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    }

    const config = {
        tableName : 'movies', // si la tabla no coincide con el plural hay que hacer esta config
        timestamp : true, // si no tiene timestamps va false
        underscored : true, //si esta escrito con _ y no en camelCase
    }

    const Movie = sequelize.define(alias, cols, config)

    return Movie
}