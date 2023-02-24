import { Router } from 'express'
import foods from '../controllers/Food.Controller.js'
import users from '../controllers/User.Controller.js'

const router = Router()

// login
router.get('/', (req, res) => {
  res.render('login')
})
router.get('/login', (req, res) => {
  res.render('login')
})

// foods
router.get('/createfood', (req, res) => {
  res.render('createfood')
})
router.get('/foods', foods.findAll)
router.post('/createFoodAtDatabase', foods.createFood)
router.get('/deleteFood/:id', foods.deleteFood)
router.get('/editFood/:id', foods.editFood)
router.post('/updateFoodAtDatabase/:id', foods.editFoodDatabase)

// users
router.get('/users', users.findAll)
router.get('/createuser', (req, res) => {
  res.render('createuser')
})
router.post('/createUserAtDatabase', users.createUser)
router.post('/loginAtDatabase', users.login)
router.get('/deleteUser/:id', users.deleteUser)
router.get('/editUser/:id', users.editUser)
router.post('/updateUserAtDatabase/:id', users.editUserDatabase)


export default router;