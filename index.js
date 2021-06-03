const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const BillerRoutes = require('./Routes/BillerRoutes')
const UserRoutes = require('./Routes/UserRoutes')

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
app.use(cors())

//ROUTES MIDDLEWARE
app.use('/api/bill', BillerRoutes)
app.use('/api/user', UserRoutes)

app.get('/', (req, res) => {res.end('Biller')})