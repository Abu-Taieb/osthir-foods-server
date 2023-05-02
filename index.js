const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json')
const recipe = require('./data/recipe.json')

app.get('/', (req, res) =>{
    res.send('hello world bangla')
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.listen(port, () => {
    console.log(`Project is running on port : ${port}`);
    
})