const express = require('express');
const app = express();
require('dotenv').config();
const bookRoutes = require('./routes/books.routes');
const port = process.env.PORT || 3000

const mongoose = require('mongoose');
app.use(express.json());

app.use('/books', bookRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/books").then((successfullConnetion)=>{
    console.log('Connected to the Database')
}).catch((connectionError)=>{
    console.log(connectionError)
})
// Listening to the port
app.listen(port, ()=>{
    console.log('Listening to the port', port)
})