const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
   const authHeader = req.headers['authorization']
   if(authHeader) {
      const token = authHeader.split(' ')[1]

      if(token === null || undefined || '')  {
         res.status(401).json({'message': 'No Token received'})
      } else {
         jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
            if(err) {
               console.log({'TOKEN ERROR': err.message})
               res.json({'TOKEN ERROR': err.message})
            }
            req.user = data
            next()
         })

      }
   } else {
      res.json({'message': 'Authorization header is required'})
   }
}

module.exports = verifyToken