require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Node Course',
        author: 'Victor Mamani' 
    })
})

app.get('/user', (req, res) => {
    res.send('this is rute user')
})

app.get('/elements',(req, res) => {
    res.render('elements', {
        title: 'Elements - Node Course',
        author: 'Victor Mamani'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        title: 'Generic - Node Course',
        author: 'Victor Mamani'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})