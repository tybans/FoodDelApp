const express = require('express');
const cors = require('cors')
require('dotenv').config()
const db = require('./db')



const app = express();
const Port = process.env.PORT



// middleware 
app.use(express.json())
app.use(cors())

const main = require('./db')
main()

const userRoutes = require('./routes/user.route')
app.use('/user', userRoutes)


app.get('/hello', (req, res) =>{
    res.send("server running...")
})


app.listen(Port, ()=>{
    console.log(`Server Started at http://localhost:${Port}`);
})