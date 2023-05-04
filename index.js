const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json')
const recipe = require('./data/recipe.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('hello world bangla')
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(c => c._id == id);
    res.send(selectedChef)
})

app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.get('/recipe/:id', (req, res) =>{
    const id = req.params.id;
    const selectedRecipe = recipe.filter(r => r._id == id);
    res.send(selectedRecipe);
})

app.listen(port, () => {
    console.log(`Project is running on port : ${port}`);
    
})