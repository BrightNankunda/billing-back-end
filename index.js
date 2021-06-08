const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();

const verifyToken = require('./Auth/Auth')
const BillerRoutes = require('./Routes/BillerRoutes')
const UserRoutes = require('./Routes/UserRoutes')
const ClientRoutes = require('./Routes/ClientsRoutes')

dotenv.config()

const port = process.env.PORT || 7000;

mongoose.connect(process.env.MONGODBURL || 'mongodb://localhost/biller', {//process.env.MONGODBURL, { 
   useUnifiedTopology: true, 
   useNewUrlParser: true, 
   useCreateIndex:true
})
.then(() => {
   console.log('Connected to port 7000');
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

app.get('/api/protected', verifyToken, (req, res, next) => {
    res.json({'message': 'protected', userEmail: req.user})
})
app.use('/api/client', verifyToken, ClientRoutes)

app.get('/', (req, res) => {res.end('Biller')})