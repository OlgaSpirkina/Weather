import { fileURLToPath } from 'url'
import * as path from 'path'
import express from 'express' // express is a function (not an object as many other modules)

const moduleURL = new URL(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

console.log(__dirname);
console.log(__filename);
console.log(chalk.cyan.bold.bgWhiteBright.inverse(path.join(__dirname, '../public')));
import chalk from 'chalk';


const app = express() // express generate our app
const publicDirPath = path.join(__dirname, '../public')
// Telling express which templating engine we installed:
// to create dynamic templates
app.set('view engine', 'hbs') // key : value (setting name / name of the module installed hbs)
app.use(express.static(publicDirPath)) // index.html
// dynamic page rendering with handlebars hbs
app.get('', (req,res) => {
  res.render('index', {
    title: 'Weather',
    name: 'created by Olga Spirkina'
  })
})
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Olga',
    profession: 'junior Web developer'
  })
})
app.get('/help', (req,res) => {
  res.render('help', {
    helpMessage: 'Feel free to reach us if you have any question'
  })
})
// Example static rendering
// static() takes the path to a folder we want to be served
// Configure a server (when we're not using a static() methode)
/**
  @param string a route '' empty for the url landing page
  @param callback a function that describes what is done when someone visite this route (first param): what is sent back
*/
/*
app.get('/about', (req, res) => {
  res.send('<h1>Hi my name is Olga!</h1>')
})
*/
// End Static rendering
app.get('/weather', (req, res) => {
  res.send(
    {
      "locatio": "Paris, France",
      "forecast": "it's 6° now and mostly cloudy"
    }
  )
})
app.get('/more', (req, res) => {
  res.send([
    {
      "name": "Olga",
      "age": 34
    },
    {
      "name": "Dina",
      "age": 32
    }
  ])
})
// Start the server up
app.listen(3000, () => {
  console.log(chalk.yellow.bold.underline('Server is up & running'));
})
