import db from '../db.js'
import { DataTypes } from 'sequelize';

export default db.define('User', {
  NAME: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'NAME'
  },
  LASTNAME: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'LASTNAME'
  },
  LOGIN: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'LOGIN'
  },
  PASSWORD: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'PASSWORD'
  },
})

// User.create({
//   NAME: 'User',
//   LASTNAME: 'Test',
//   LOGIN: 'usertest',
//   PASSWORD: 'admin123'
// })

// // User.sync({ force: true })