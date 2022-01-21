# gourmet-made-easie

<br />

<br>
<div align="center">
<img src="ReadmeImages/RedPaperclipLogo.png" alt="Red Paperclip Logo"/>
</div><br>

<br>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#contributors">Contributors</a>
      <ul>
        <li><a href="#patrick-lorden">Patrick Lorden</a></li>
        <li><a href="#matthew-zipkes">Matthew Zipkes</a></li>
        <li><a href="#alex-ni">Alex Ni</a></li>
        <li><a href="#sam-martin">Sam Martin</a></li>
      </ul>
    </li>
    <li>
      <a href="#about-the-project">Project Overview</a>
      <ul>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#applcation-demo">Application Demo</a></li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>
<br>

<!-- Contributors -->

# Contributors

## Rebekah Cruz

email here

UI Owner/Software Engineer

<img src="ReadmeImages/RebekahCruz.jpeg" alt="Rebekah Cruz headshot" height="150">

[![linkedin-shield]][rebekah-linkedin]
[![github-shield]][rebekah-github]

<br>

## Cory Ellerbroek

cory.ellerbroek@gmail.com

UI Owner/Software Engineer

 <img src="ReadmeImages/CoryEllerbroek.jpeg" alt="Cory Ellerbroek Headshot" height="200">

[![linkedin-shield]][cory-linkedin]
[![github-shield]][cory-github]

<br>

## William Fink

email here

 <img src="ReadmeImages/WilliamFink.jpeg" alt="William Fink Headshot" height="150">

[![linkedin-shield]][william-linkedin]
[![github-shield]][william-github]

<br>

### Travis Morse

travis503@gmail.com

UI Owner/Software Engineer

<img src="ReadmeImages/TravisMorse.jpeg" alt="Travis Morse Headshot" height="150">

[![linkedin-shield]][travis-linkedin]
[![github-shield]][travis-github]

<br>

## Matthew Sewell

email here

Architecture Owner/Software Engineer

 <img src="ReadmeImages/MatthewSewell.jpeg" alt="Matthew Sewell Headshot" height="150">

[![linkedin-shield]][matthew-linkedin]
[![github-shield]][matthew-github]

<br>

## Pinping Xiao

email here

Architecture Owner/Software Engineer

 <img src="ReadmeImages/PingpingXiao.jpeg" alt="Pingping Xiao Headshot" height="150">

[![linkedin-shield]][pingping-linkedin]
[![github-shield]][pingping-github]

<br>

## API Documentation
### Summary
- auth related routes
  - POST /auth/signup
  - POST /auth/login
  - POST /auth/logout

- user related routes

  - GET /user/:userId
  - GET /user/session/:sessionId
  - GET /user/:userId/favorites
  - GET /user/:userId/recipes
  - PATCH /user/:userId/favorites/:recipeId
  - DELETE /user/:userId/favorites/:recipeId
- recipe related routes
  - POST /recipe
  - GET /recipe/:recipeId
  - GET /recipe/cards
  - GET /recipe/random
  - GET /recipe/search


### Auth Related Routes
#### ```POST /auth/signup```
- Description: signup by providing your email, name (preferrably real name) and password
- Status: 
  - ```200 OK``` if success and redirect to "/"
  - ```403 Already Exists``` if failed and redirect to "/signup"
- Request Body Parameters:

| Parameter | Type | Description |
| --- | --- | --- |
|  username | String | user's name that the user prefers to be called |
|  email | String | email will be unique and will server the identifier of an user |
|  password | String | - |

- Request Body Example:
```javascript
{
  username: 'Alex',
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
	userName: "tester",
	email: "me@me.com"
}
```

#### ```GET /user/session/:sessionId```
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
- Response Example:
``` javascript
[
  {
    recipeId: 1,
    recipeName: "chicken and rice",
    userName: "tester1",
    description: "dish that I make after the gym", 
    photo: "http://photo"
  }
  // ...
]
```

#### ``` PATCH /user/:userId/favorites/:recipeId```

- ***!!! NOTE***
  - protected route: login required
  - [***very important***] frontend needs to ensure that a user can only favorite a recipeId exactly 1 time if the user have not favorited it before
- Description: Add a recipe to favorites and increase favorite count for that recipe
- Status:  ``` 200 OK```

#### ``` DELETE /user/:userId/favorites/:recipeId```  ***!!! NOTE***
- ***!!! NOTE***
  - protected route: login required
  - [***very important***] frontend needs to ensure that a user cannot unfavorite a recipeId more than 1 time if the user has previously favorited the recipe

- Description: Remove a recipe from favorites
- Status:  ``` 200 OK```

### Recipe Related Routes

#### ``` POST /recipe``` ***!!! NOTE***
- ***!!! NOTE***
  - protected route: login required
- Description: Post a recipe
- Status: ```201 Created```
- Request body parameters:

| Parameter | Type | Description |
| --- | --- | --- |
| recipeName | String | - |
| description | String | a description of the recipe |
| activeTime | Integer | time needed to actively cook |
| totalTime | Integer | total time required for this recipe |
| photo | String or null | a link to the photo |
| instructions | [String] | a list of instructions in order |
| ingredients | [Object] | an array of object, each object has properties "ingredientName", "amount" and "measurementUnit" |
|  mealType | [Integer] | possible entries are "breakfast", "brunch", "lunch", "appetizer", "dinner" and/or "dessert" |
|  protein | [Integer] | possible entries are "poultry", "beef", "pork", "seafood", "vegetarian" and/or "vegan". |
| servingSize | Integer | - |

- Request Body Example:
```javascript
{
    recipeName: "Alex Type of meal",
    description: "This is a meal designed for Alex specifically",
    activeTime: 5,
    totalTime: 10,
    photo: null,
    instructions: [
        "add yogurt", "add berries", "add granola"
    ],
    "ingredients": [
        {ingredientName: "fage yogurt", amount: 1, measurementUnit: "cup"},
        {ingredientName: "berries mix", amount: 1, measurementUnit: "cup"},
        {ingredientName: "granola", amount: 1, measurementUni": "cup"}
    ],
    mealType: [1, 1, 0, 0, 0, 0],
    protein: [0, 0, 0, 0, 1, 0],
    servingSize: 1
}
```

#### ```GET /recipe/:recipeId```
- Description: Get full detailed recipe
- Status:  ``` 200 OK```
- Response Example:
```javascript
{
    recipeId: 2,
    username: "Morris",
    favoritedCount: 0,
    recipeName: "Alex Type of meal",
    description: "This is a meal designed for Alex specifically",
    activeTime: 5,
    totalTime: 10,
    photo: null,
    instructions: [
        "add yogurt",
        "add berries",
        "add granola"
    ],
    ingredients: [
        {
            ingredientName: "fage yogurt",
            amount: 1,
            measurementUnit: "cup"
        },
        {
            ingredientName: "berries mix",
            amount: 1,
            measurementUnit: "cup"
        },
        {
            ingredientName: "granola",
            amount: 1,
            measurementUnit: "cup"
        }
    ],
    mealType: [
        "breakfast",
        "brunch"
    ],
    protein: [
        "vegetarian"
    ],
    servingSize: 1,
    createdAt: "2021-12-16T08:38:39.422Z"
}
```


#### ```GET /recipe/cards```
- Description: Get recipe cards that are filted and sorted in ways defined by query parameters (accessed by req.query in express)
- Status: ```200 OK```
- Request body parameters:

| Parameter | Type | Description |
| --- | --- | --- |

|  mealType | [String] | full options are "breakfast", "brunch", "lunch", "appetizer", "dinner" and/or "dessert" |
|  protein | [String] | full options are "poultry", "beef", "pork", "seafood", "vegetarian" and/or "vegan". |
|  sort | String  | defaulted to "relavent" if not provided; other options are "newest" and "favorite" |
| count | Integer | defaulted to maximum value (every recipe) if not provided; specify the number of results that will be fetched |


- Request body Example:
```javascript
{

    mealType: ["breakfast", "brunch"], // will find exact match
    protein: ["vegetarian"], // will find exact match
    count: 10, // default to max
    sort: "relevant" // default to relevant

}
```
- Response Example:
```javascript
[

    {
        recipeId: 2,
        recipeName: "Alex Type of meal",
        username: "Morris",
        description: "This is a meal designed for Alex specifically",
        photo: null
    }
    //...

]
```
#### `GET /recipe/random`
- Description: get a random detailed recipe
- Status: ```200 OK```
- Response Example:
```javascript
{
    "recipeId": 1,
    "username": "Morris",
    "favoritedCount": 1,
    "recipeName": "Alex Yogurt",
    "description": "This is a meal designed for Alex specifically",
    "activeTime": 5,
    "totalTime": 10,
    "photo": null,
    "instructions": [
        "add yogurt",
        "add berries",
        "add granola"
    ],
    "ingredients": [
        {
            "ingredientName": "fage yogurt",
            "amount": 1,
            "measurementUnit": "cup"
        },
        {
            "ingredientName": "berries mix",
            "amount": 1,
            "measurementUnit": "cup"
        },
        {
            "ingredientName": "granola",
            "amount": 1,
            "measurementUnit": "cup"
        }
    ],
    "mealType": [
        "breakfast",
        "brunch"
    ],
    "protein": [
        "vegetarian"
    ],
    "servingSize": 1,
    "createdAt": "2021-12-16T09:37:39.848Z"
}
```

#### `GET /recipe/search`
- Description: search a recipe by its name using a search string in lower or upper case; it is type insensitive. 
- Status: ```200 OK```
- Request body parameters:

| Parameter | Type | Description |
| --- | --- | --- |

|  search | String | if empty string is provided it is equivalent to GET /recipe/cards (get all cards); on search will filter recipes containing the string you searched for |
- Request Body Example:
```javascript
{
    search: "yoGurt"

}
```
- Response Example
```javascript
[
    {
        recipeId: 1,
        recipeName: "Alex Yogurt",
        username: "Morris",
        description: "This is a meal designed for Alex specifically",
        photo: null
    }
    // ...
]
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
