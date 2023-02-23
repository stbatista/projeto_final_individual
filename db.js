import Sequelize from 'sequelize'

const sequelize = new Sequelize('projeto_dev', 'root', '123456', {
  host: "localhost",
  dialect: 'mysql'
})

export default sequelize;