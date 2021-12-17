import axios from 'axios';

//Product Requests

//Confirmed exact filter required
// WILL NEED TO REVISIT OR ADD IN GOOD DUMMY DATA FOR HOME PAGE
const homeCardFilter = (mealString) => {
  // let mealFilter = {
  //   mealType: [mealString],
  //   count: 2,
  //   protein: [],
  //   sort:'relevant'

  // }
  return axios.get('/recipe/cards', {params: mealString})
  .then(recipeTiles => {
    return recipeTiles.data
  })
  .catch(error => {
    console.error(error)
  })
}

//confirmed
const getRecipeTilesSearch = (searchString = '') => {
  return axios.get('/recipe/search', {params: {search: searchString}})
  .then(recipeTiles => {
    return recipeTiles.data;
  })
  .catch(err => {
    console.error(error)
  })
}

//confirmed
const getRecipe = (id) => {
  return axios.get(`/recipe/${id}`)
  .then(recipe => {
    return recipe.data
  })
  .catch(error => {
    console.error(error)
  })
}

//confirmed
const getRandomRecipe = () => {
  return axios.get('/recipe/random')
  .then(randomRecipe => {
     return randomRecipe.data
  })
  .catch(error => {
    console.error(error)
  })
}

// pending login to test
const postRecipe = (body) => {
  return axios.post('/recipe', body)
  .then(result => {
    console.log('recipe posted')
  })
  .catch(err => {
    console.error(err);
  })
}

// const getUserRecipes = () => {
//   return axios.get('/')
// }

const routes = {
  homeCardFilter,
  getRecipe,
  getRandomRecipe,
  getRecipeTilesSearch,
  postRecipe
}

export default routes;