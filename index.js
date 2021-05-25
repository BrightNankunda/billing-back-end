const express = require('express')
const mongoose = require('mongoose')

const app = express();
const BillerRoutes = require('./Routes/BillerRoutes')

const mongodbUrl = "mongodb://localhost/biller"

const port = process.env.PORT || 7000;

mongoose.connect(mongodbUrl, { 
   useUnifiedTopology: true, 
   useNewUrlParser: true, 
   useCreateIndex:true
})
.then(() => {
   console.log('Connected to the MongoDB');
   return app.listen(port);
})
.then(() => {
    console.log('Connected to the Server on Port: ' + port);
})
.catch(err => {
    console.log(err.message);
})

//THIRD PARTY MIDDLEWARE
app.use(express.json())

//ROUTES MIDDLEWARE
app.use('/api/bill', BillerRoutes)

app.get('/', (req, res) => {res.end('Biller')})