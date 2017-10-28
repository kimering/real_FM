var express = require('express')

var app = express()
var router = require('./routes/main')(app)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'))
app.use('/files', express.static('uploads'))

/*
const { IsPrime } = require('./build/Release/addon')
const isPrime = require('./public/javascripts/cpptest.js')

const path = 'c://merii'
console.log(`checking whether ${path} is prime... ${isPrime(path)}`)
console.log(IsPrime())
*/
var server = app.listen( 3000, () => {
  console.log('Server is Running on port 3000');
})
