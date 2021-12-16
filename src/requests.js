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

//confirmed
const getRandomRecipe = () => {
  return axios.get('/recipe/random')
  .then(randomRecipe => {
     return randomRecipe.data
  })
  .catch(error => {
    error
  })
}

// getRandomRecipe();

const routes = {
  getRecipeTiles,
  getRecipe,
  getRandomRecipe
}

export default routes;