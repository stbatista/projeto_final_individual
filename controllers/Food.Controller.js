import FoodRepository from '../models/Food.js';

function findAll(req, res) {
  FoodRepository.findAll().then((results) => {
    let foodsData = []
    results.map((food) => {
      foodsData.push(food.dataValues)
    })

    res.render('foods', { foods: foodsData });
  });
}

function createFood(req, res) {
  const { name, description, price } = req.body;

  FoodRepository.create({
    NAME: name,
    DESCRIPTION: description,
    PRICE: price,
  }).then((response) => res.render('foods'));
}

function deleteFood(req, res) {
  const { id } = req.params
  FoodRepository.destroy({ where: { 'id': id } }).then((response) => {
    findAll(req, res)
  })
}

function editFood(req, res) {
  const { id } = req.params
  FoodRepository.findOne({ where: { 'id': id } }).then((response) => {
    res.render('editfood', { food: response.dataValues })
  })
}

function editFoodDatabase(req, res) {
  const { name, description, price } = req.body
  FoodRepository.findOne({ where: { 'id': req.params.id } }).then((food) => {
    food.NAME = name
    food.DESCRIPTION = description
    food.PRICE = Number(price)

    food.save().then(() => {
      findAll(req, res)
    })
  })
}

export default { findAll, createFood, deleteFood, editFood, editFoodDatabase };
