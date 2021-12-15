# gourmet-made-easie

## Frontend Facing API Documentation
### Summary
- auth related routes
  - POST /auth/signup
  - POST /auth/login
  - POST /auth/logout
- users related routes
  - GET /user/:userId
  - GET /user/:userId/session/:sessionId
  - GET /user/:userId/favorites
  - GET /user/:userId/recipes
  - PATCH /user/:userId/favorites/:recipeId
  - DELETE /user/:userId/favorites/:recipeId
- recipe related routes
  - GET /recipe/:recipeId
  - GET /recipe/cards
  - POST /recipe

### Auth Related Routes
#### ```POST /auth/signup```
- Description: signup by providing your email, name (preferrably real name) and password
- Status: 
  - ```200 OK``` if success and redirect to "/"
  - ```403 Already Exists``` if failed and redirect to "/signup"
- Request Body Parameters:

| Parameter | Type | Description |
| --- | --- | --- |
|  userName | String | user's name that the user prefers to be called |
|  email | String | email will be unique and will server the identifier of an user |
|  password | String | - |

- Request Body Example:
```javascript
{
  userName: 'Alex',
  email: 'me@me.com',
  password: 'password'
}
```
#### ```POST /auth/login```
- Description: user login
- Status: 
  - ```200 OK``` if success and redirect to "/"
  - ```403 Forbidden``` if failed and redirect to "/login"
- Request Body Parameters:

| Parameter | Type | Description |
| --- | --- | --- |
|  email | String | email will be unique and will server the identifier of an user |
|  password | String | - |

- Request Body Example:
```javascript
{
  email: 'me@me.com',
  password: 'password'
}
```
#### ```POST /auth/logout```
- Description: user logout
- Status: ```200 OK``` if success and redirect to "/login"

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

####```GET /user/:userId/session/:sessionId```
- Description: get a user's info by using sessionId in the cookie
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
    recipeId: 1,
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
    recipeId: 1,
    recipeName: "chicken and rice",
    username: "tester1",
    description: "dish that I make after the gym", 
    photo: "http://photo"
  }
  // ...
]
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
| count | Integer | defaulted to 10; specify the number of results that will be fetched |

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
| instructions | [String] | a list of instructions in order |
| ingredients | [Object] | an array of object, each object has properties "ingredientName", "amount" and "measurementUnit" |
|  mealType | [Integer] | possible entries are "breakfast", "brunch", "lunch", "appetizer", "dinner" and/or "dessert" |
|  protein | [Integer] | possible entries are "poultry", "beef", "pork", "seafood", "vegetarian" and/or "vegan". |
| servingSize | Integer | - |

- Request Body Example:
```javascript
{
	recipeName: "chicken and rice",
	userName: "tester1",
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
