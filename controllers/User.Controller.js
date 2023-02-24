import UserRepository from '../models/User.js'
import FoodController from './Food.Controller.js'

async function login(req, res) {
  const { username, password } = req.body
  const user = await UserRepository.findOne({ where: { login: username } })

  if (user && user.dataValues.PASSWORD === password) {
    FoodController.findAll(req, res)
  }

  if (!user || user.dataValues.PASSWORD !== password) {
    res.render('login', { errorLogin: 'Usuário ou senha inválidos' })
  }
}

function createUser(req, res) {
  const { NAME, LASTNAME, LOGIN, PASSWORD } = req.body;

  UserRepository.create({
    NAME,
    LASTNAME,
    LOGIN, PASSWORD
  }).then((response) => findAll(req, res));
}

function findAll(req, res) {
  UserRepository.findAll().then((results) => {
    let usersData = []
    results.map((food) => {
      usersData.push(food.dataValues)
    })

    res.render('users', { users: usersData });
  });
}

function deleteUser(req, res) {
  const { id } = req.params
  UserRepository.destroy({ where: { 'id': id } }).then((response) => {
    findAll(req, res)
  })
}

function editUser(req, res) {
  const { id } = req.params
  UserRepository.findOne({ where: { 'id': id } }).then((response) => {
    res.render('edituser', { user: response.dataValues })
  })
}

function editUserDatabase(req, res) {
  const { name, lastname, login, password } = req.body
  UserRepository.findOne({ where: { 'id': req.params.id } }).then((user) => {
    user.NAME = name
    user.LASTNAME = lastname
    user.LOGIN = login
    user.PASSWORD = password

    user.save().then(() => {
      findAll(req, res)
    })
  })
}

export default { login, createUser, findAll, deleteUser, editUser, editUserDatabase }