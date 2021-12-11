# gourmet-made-easie

## API Documentation
- break down into 2 parts –– users related and recipes related

### Users Related Endpoints
#### ```GET /user/:userId```
- Description: get a user's info
- Status:  ``` 200 OK```
- Response:
``` javascript
{
	userId: 1,
	userName: "tester",
	email: "me@me.com"
}
```

#### ```GET /user/:userId/favorites```
- Description: get a user's favorite recipes
- Status:  ``` 200 OK```
- Response:
``` javascript
[
  {
    recipeName: "chicken and rice",
    userName: "tester1",
    description: "dish that I make after the gym", 
    photo: "http://photo"
  }
  // ...
]
```

#### ```GET /user/:userId/recipes```
- Description: get a user's recipes
- Status:  ``` 200 OK```
- Response:
``` javascript
[
  {
    recipeName: "chicken and rice",
    userName: "tester1",
    description: "dish that I make after the gym", 
    photo: "http://photo"
  }
  // ...
]
```

#### ```POST /user ``` *!!! need investigate*
- Description: Create an user account
- Status:  ``` 201 Created```
- Request Body Parameters:

| Parameter | Type | Description |
| --- | --- | --- |
|  userName | String | - |
|  email | String | - |

- Request Body Example:
```javascript
{
	userName: "tester",
	email: "me@me.com"
}
```
#### ``` PATCH /user/:userId/favorites/:recipeId```
- Description: Add a recipe to favorites
- Status:  ``` 200 OK```

#### ``` DELETE /user/:userId/favorites/:recipeId```
- Description: Remove a recipe from favorites
- Status:  ``` 200 OK```

### Recipe Related Endpoints
#### ```GET /recipe/:recipeId```
- Description: Get full detailed recipe
- Status:  ``` 200 OK```
- Response Body Example:
```javascript
{
  recipeId: 1,
  username: "bestBaker123",
  favoritedCount: 10,
  recipeName: "chicken and rice",
  description: "this is a great dish that I make after the gym",
  activeTime: 10,
  totalTime: 30,
  photo: "http://someRandomPhoto",
  instructions: [
    "clean rice", "unfreeze chicken", "salt chicken", "cook chicken"
  ],
  ingredients: [
    { ingredientName: "chicken", amount: 1, measurementUnit: "lb"},
    { ingredientName: "rice", amount: ½, measurementUnit: "cup"}
  ],
  mealType: [‘lunch’, ‘dinner’],
  protein: [‘poultry’],
  servingSize: 2,
  createdAt: "2021-12-06 09:07:26"
}


```
#### ```GET /recipe/cards```
- Description: Get recipe cards that are filted and sorted in ways defined by body parameters
- Status: ```200 OK```
- Request body parameters:

| Parameter | Type | Description |
| --- | --- | --- |
|  mealType | [ String ] | defaulted to empty array; full options are "breakfast", "brunch", "lunch", "appetizer", "dinner" and/or "dessert" |
|  protein | [ String ] | defaulted to empty array; full options are "poultry", "beef", "pork", "seafood", "vegetarian" and/or "vegan". |
|  sort | String  | defaulted to "relavent"; other options are "newest" and "favorite" |
| count | Integer | defaulted to 10; specify the number of results that will be fetched |

- Request body Example:
```javascript
{
	mealType: [ ‘lunch’],  // default []
	protein: [ ‘chicken’ ], // default []
	sort: ‘newest’, // default to relevant
	amount: 10   // default to 10 (Ask about this)
}

```
- Response body Example:
```javascript
[
  {
    recipeName: "chicken and rice",
    userName: "tester1",
    description: "this is a great dish that I make after the gym",
    photo: "http://photo"
  }
  // ...
]
```
#### ``` POST /recipe```
- Description: Post a recipe
- Status: ```201 Created```
- Request body parameters:

| Parameter | Type | Description |
| --- | --- | --- |
| recipeName | String | - |
| userName | String | - |
| description | String | a description of the recipe |
| activeTime | Integer | time needed to actively cook |
| totalTime | Integer | total time required for this recipe |
| photo | String | a link to the photo |
| instructions | [ String ] | a list of instructions in order |
| ingredients | [ Object ] | an array of object, each object has properties "ingredientName", "amount" and "measurementUnit" |
|  mealType | [ String ] | possible entries are "breakfast", "brunch", "lunch", "appetizer", "dinner" and/or "dessert" |
|  protein | [ String ] | possible entries are "poultry", "beef", "pork", "seafood", "vegetarian" and/or "vegan". |
| servingSize | Integer | - |

- Request body Example:
```javascript
{
	recipeName: "chicken and rice",
	userName: "tester1",
	description: "this is a great dish that I make after the gym",
	activeTime: 10,
	totalTime: 30,
	photo: "http://photo",
	instructions: ["add water", "heat up water"],
	ingredients: [ { ingredientName: "salt", amount: 1, measurementUnit: "table spoon"} ]
	mealType: ["lunch’, ‘brunch"],
	protein: [ "beef", "pork" ],
	servingSize: 3
}

```


## Instructions
First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Credits

Made with [createapp.dev](https://createapp.dev/)