# Recipes_backend_app

## Project Description
This application allows users to add, find, update and delete authors and add, find and delete their corresponding recipes.

## Project Links
- [github repo backend](https://github.com/kpendurthi/Recipes_backend_app)
- [github repo frontend](https://github.com/dvorakkarrie/Project3_Recipe_Apps)
- [deployment]()



#### PostMVP - Gold
* set up database for each recipe
* set up database for each author 
* set up database for each category
* add nutrient functionality

## User Stories
* as a user, I can add my name, email address and recipe to the database
* as a user, I can update my name and email address
* as a user, I can delete my name and email address
* as a user, I can create a recipe (name, external url, image, category and instructions)
* as a user, I can update a recipe (name, image, external directions url, category & instructions)
* as a user, I can delete a recipe


## Time Frames
Time frames are also key in the development cycle.  You have limited time to code all phases of the application (app).  Your estimates can then be used to evalute app possibilities based on time needed and the actual time you have before app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating backend | H | 8hrs| 10hrs | 12hrs |
| Setting up seed file | H | 12hrs| 10hrs | 14hrs |
| Total | H | 20hrs| 22hrs | 26hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as ReactStrap, D3, etc.
  - Mongo
  - Express
  - Axios 
  - React Router

  ## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```category controller 
   // GET ALL categories
router.get('/', (req, res) => {
    Category.find({}).then(categories => 
        res.json(categories))
  })	

// GET categorie BY ID	
router.get('/byId/:id', (req, res) => {
    Category.find({_id: req.params.id})
    .then(categories => res.json(categories))
})
```   
   category seed data 
   Category.create({
                    type: "Appetizer",
                }).then(category => {
                    category1=category
                    console.log("added category1")
                })

                Category.create({
                    type: "Dessert",
                }).then(category => {
                    category2=category
                    console.log("added category2")
                })


```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

- referential integrity issue #2:  Marc helped us by rewriting the seed file in the correct format.
