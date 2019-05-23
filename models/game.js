'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};