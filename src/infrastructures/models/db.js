const Sequelize = require('sequelize');

const db = {};

const DB_NAME = process.env.DB_NAME || 'asana';
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';

let models = [];

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '5432',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Initialize models
models.forEach(model => {
  const sequelizeModel = model(sequelize, Sequelize);
  db[sequelizeModel.name] = sequelizeModel;
});

// Apply associations
Object.keys(db).forEach(key => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});
  
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;