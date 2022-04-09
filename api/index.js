const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://admin:admi@cluster0.kk5cn.mongodb.net/ecommerce?retryWrites=true&w=majority')
        .then(response =>console.log(response))
        .catch(err => console.log(err))

app.listen(5000, () => {
    console.log("Backend server is running")
})