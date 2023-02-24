import db from '../db.js'
import { DataTypes } from 'sequelize';

export default db.define('Food', {
  NAME: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'NAME'
  },
  DESCRIPTION: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'DESCRIPTION'
  },
  PRICE: {
    type: DataTypes.DECIMAL(7, 2),
    field: 'PRICE'
  },
})

// Food.sync({ force: true })