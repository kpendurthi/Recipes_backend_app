const express = require('express');
const app = express();
const usersController = require('./controllers/users');
const recipesController = require('./controllers/recipes')
// const ingredientsController = require('./controllers/ingredients')
const categoriesController = require('./controllers/categories')
const parser = require('body-parser');
const cors = require('cors')

// Middleware
app.use(cors())
// app.use(express.json());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

// Controllers
app.use('/api/users', usersController);
app.use('/api/recipes', recipesController)
// app.use('/api/ingredients',ingredientsController)
app.use('/api/categories',categoriesController)

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});	
