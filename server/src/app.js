const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


console.log("Hello World")
const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())                         //revisit for security considerations

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `${req.body.email} user registered`
    })
})

app.listen(process.env.PORT || 8082)