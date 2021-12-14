# gourmet-made-easie

## API Documentation
### Summary
- users related routes
  - GET /user/:userId
  - GET /user/:userId/favorites
  - GET /user/:userId/recipes
  - POST /user (**need investigation**)
  - PATCH /user/:userId/favorites/:recipeId
  - DELETE /user/:userId/favorites/:recipeId
- recipe related routes
  - GET /recipe/:recipeId
  - GET /recipe/cards
  - POST /recipe

### Users Related Routes
#### ```GET /user/:userId```
- Description: get a user's info
- Status:  ``` 200 OK```
- Response Example:
``` javascript
{
	userId: 1,
	username: "tester",
	email: "me@me.com"
}
```

#### ```GET /user/:userId/favorites```
- Description: get a user's favorite recipes
- Status:  ``` 200 OK```
- Response Example:
``` javascript
[
  {
    recipeName: "chicken and rice",
    username: "tester1",
    description: "dish that I make after the gym", 
    photo: "http://photo"
  }
  // ...
]
```

#### ```GET /user/:userId/recipes```
- Description: get a user's recipes
- Status:  ``` 200 OK```
- Response Example:
``` javascript
[
  {
    recipeName: "chicken and rice",
    username: "tester1",
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
|  username | String | - |
|  email | String | - |

- Request Body Example:
```javascript
{
	username: "tester",
	email: "me@me.com"
}
```
#### ``` PATCH /user/:userId/favorites/:recipeId```
- Description: Add a recipe to favorites
- Status:  ``` 200 OK```

#### ``` DELETE /user/:userId/favorites/:recipeId```
- Description: Remove a recipe from favorites
- Status:  ``` 200 OK```

### Recipe Related Routes
#### ```GET /recipe/:recipeId```
- Description: Get full detailed recipe
- Status:  ``` 200 OK```
- Response Example:
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
|  mealType | [String] | defaulted to empty array; full options are "breakfast", "brunch", "lunch", "appetizer", "dinner" and/or "dessert" |
|  protein | [String] | defaulted to empty array; full options are "poultry", "beef", "pork", "seafood", "vegetarian" and/or "vegan". |
|  sort | String  | defaulted to "relavent"; other options are "newest" and "favorite" |
| count | Integer [optional] | defaulted to 10; specify the number of results that will be fetched |

- Request body Example:
```javascript
{
	mealType: [ "lunch"],  // default []
	protein: [ "chicken" ], // default []
	sort: "newest", // default to relevant
	amount: 10   // default to 10 (Ask about this)
}

```
- Response Example:
```javascript
[
  {
    recipeName: "chicken and rice",
    username: "tester1",
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
| username | String | - |
| description | String | a description of the recipe |
| activeTime | Integer | time needed to actively cook |
| totalTime | Integer | total time required for this recipe |
| photo | String | a link to the photo |
| instructions | [String] | a list of instructions in order |
| ingredients | [Object] | an array of object, each object has properties "ingredientName", "amount" and "measurementUnit" |
|  mealType | [Integer] | possible entries are "breakfast", "brunch", "lunch", "appetizer", "dinner" and/or "dessert" |
|  protein | [Integer] | possible entries are "poultry", "beef", "pork", "seafood", "vegetarian" and/or "vegan". |
| servingSize | Integer | - |

- Request Body Example:
```javascript
{
	recipeName: "chicken and rice",
	username: "tester1",
	description: "this is a great dish that I make after the gym",
	activeTime: 10,
	totalTime: 30,
	photo: "http://photo",
	instructions: ["add water", "heat up water"],
	ingredients: [ { ingredientName: "salt", amount: 1, measurementUnit: "table spoon"} ],
	mealType: [0, 1, 1, 0, 0, 0], // lunch, brunch
	protein: [0, 1, 1, 0, 0, 0], // beef pork
	servingSize: 3
}

```
## Note
- data representation for protein and meal type in the db
```bash
  mealType
  0: breakfast,
  1: brunch,
  2: lunch,
  3: appetizer,
  4: dinner,
  5: dessert 

 protein
 0: poultry,
 1: beef,
 2: pork,
 3: seafood,
 4: vegetarian,
 5: vegan 
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
