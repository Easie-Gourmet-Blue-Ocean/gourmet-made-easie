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
      <a href="#project-overview">Project Overview</a>
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
    <li><a href="#application-demo">Application Demo</a></li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>
<br>

<!-- Contributors -->

# Contributors

## Patrick Lorden

pjlorden@gmail.com

Product Manager/Software Engineer

<img src="ReadmeImages/RebekahCruz.jpeg" alt="Rebekah Cruz headshot" height="150">

[![linkedin-shield]][patrick-linkedin]
[![github-shield]][patrick-github]

<br>

## Matthew Zipkes

MatthewZipkes@gmail.com

Co-Architecture Owner/Software Engineer

 <img src="ReadmeImages/CoryEllerbroek.jpeg" alt="Cory Ellerbroek Headshot" height="200">

[![linkedin-shield]][matthew-linkedin]
[![github-shield]][matthew-github]

<br>

## Alex Ni

email here

Co-Architecture Owner/Software Engineer

 <img src="ReadmeImages/WilliamFink.jpeg" alt="William Fink Headshot" height="150">

<!-- [![linkedin-shield]][alex-linkedin] -->
[![github-shield]][alex-github]

<br>

## Sam Martin

email here

UI Owner/Software Engineer

<img src="ReadmeImages/TravisMorse.jpeg" alt="Travis Morse Headshot" height="150">

[![linkedin-shield]][sam-linkedin]
[![github-shield]][sam-github]
<br>

# Introduction

<br>
<div align="center">
<img src="ReadmeImages/RedPaperclipLogo.png" alt="Red Paperclip Logo"/>
</div><br>

Red Paperclip was a collaborative Full-Stack capstone between the 7 collaborators. This was a brief 1-week sprint that simulated the real-world development of a Full-Stack web application to the demands provided by the client.

<br>

# Project Overview

<br>

This project was a brief 1-week sprint where our team tried to complete an MVP for an external user.

> "I’d like to create an app that’s called "Red Paperclip", where users can post the item that they have to trade in exchange for an item that they currently have on hand (ie. A user has a red paperclip, and hopefully someone else has something they're willing to trade for that red paperclip) This would mean that multiple users should be able to post their item, but there should be both 1) a feed that exists for anyone to offer their item and 2) a personal page that tracks everything you’ve traded so far, and to update what you now have on hand (incl. Photos and description, and even whether they want their item to be public or not).In order for this to be more legitimate, users can only respond to other’s posts by offering the item they have (and all offers can be publicly viewed in the main feed), and if the other person agrees, then they both need to receive a notification to exchange addresses (fake addresses, of course) OR to meet in person and so then they’d move from a public exchange to private messages.For the feed itself, the user should be able to search for keywords so that they’re not scrolling through an endless feed of offers in case they’re really looking for something in particular."

Team Member Expectations and Workflow:

- Oversaw their own module while working in collaboration with teammates to ensure interactive functionality
- Communicated their progress in daily standups
- Created and completed their task tickets using Trello
- Brainstormed and reflected the teams work in 2 day mini-sprints

### Tech Stack

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Axios](https://axios-http.com/)
- [Express](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/)
- [Webpack](https://webpack.js.org/)
<br>

# Getting Started

To explore the project, follow the instructions below.

### Instructions
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

### Running

Open the file `dist/index.html` in your browser

<br><br>

## Application Demo
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



<!-- Contributor Links -->
[patrick-linkedin]: https://www.linkedin.com/in/patrick-lorden/
[patrick-github]: https://github.com/Hellequin5
[matthew-linkedin]: https://www.linkedin.com/in/matthewzipkes/
[matthew-github]: https://github.com/MatthewZipkes
<!-- [alex-linkedin]: https://www.linkedin.com/in/william-w-fink/ -->
[alex-github]: https://github.com/clalexni
[sam-linkedin]: https://www.linkedin.com/in/martin110sam/
[sam-github]: https://github.com/martin110sam
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-grey?style=for-the-badge&logo=linkedin
[github-shield]: https://img.shields.io/badge/-GitHub-grey?style=for-the-badge&logo=github
