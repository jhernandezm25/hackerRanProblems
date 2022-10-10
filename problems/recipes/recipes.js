var recipes = require('../recipes.json');

getRecipes = async (req,res) => {
  try {
    const id = req.query.ids
    const ingredients = []
    if(id) {
      const ids = id.split(',')
      for (const id of ids) {
        const r = recipes.find(x => x.id == id)
        if (r) {
          ingredients.push(...r.ingredients)
        }
      }
      if(ingredients.length === 0) {
        return res.status(404).json("NOT_FOUND")
      }
      res.json(ingredients)
    } else {
      res.status(400).json({})
    }
  } catch (error) {
    console.log('----> error',error.message)
  }

}

module.exports = {getRecipes}
var recipes = require('../recipes.json');

getRecipes = async (req,res) => {
  try {
    const id = req.query.ids
    const ingredients = []
    if(id) {
      const ids = id.split(',')
      for (const id of ids) {
        const r = recipes.find(x => x.id == id)
        if (r) {
          ingredients.push(...r.ingredients)
        }
      }
      if(ingredients.length === 0) {
        return res.status(404).send("NOT_FOUND")
      }
      res.json(ingredients)
    } else {
      res.status(400).json({})
    }
  } catch (error) {
    console.log('----> error',error.message)
  }

}

module.exports = {getRecipes}