const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;

// get image base on public folder
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
// use morgan to check HTTP
app.use(morgan('combined'))
//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'//configure .handlebars -> .hbs
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


app.get('/', (req, res) => {
  res.render('home'); // get home from views folder after using handlebars
})

app.get('/news', (req, res) => {
  res.render('news'); // like get home
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})