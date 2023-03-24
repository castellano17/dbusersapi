const express = require("express")
const cors = require('cors')

const userRouter = require('./users.router')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({message: 'Server OK'})
}) 

app.use('/', userRouter)

app.listen(3000, () => {
    console.log('Server started at port 3000')
})
