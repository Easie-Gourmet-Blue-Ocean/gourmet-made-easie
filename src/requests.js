import axios from 'axios';

const getRecipeTiles = (body) => {
  return axios.get('/recipe/cards', {params: body})
  .then(recipeTiles => {
    recipeTiles.data
  })
  .catch(error => {
    console.error(error)
  })
}

const getRecipe = (id) => {
  return axios.get(`/recipe/${id}`)
  .then(recipe => {
    recipe.data
  })
  .catch(error => {
    error
  })
}

const getRandomRecipe = () => {
  return axios.get('/recipe/random')
  .then(randomRecipe => {
    randomRecipe.data
  })
  .catch(error => {
    error
  })
}

export {
  getRecipeTiles,
  getRecipe,
  getRandomRecipe
}