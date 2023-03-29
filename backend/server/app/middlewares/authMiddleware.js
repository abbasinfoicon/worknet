import jwt from 'jsonwebtoken'
import authModel from '../models/authModel.js'
const config = process.env;

var auth = async (req, res, next) => {
  let token
  const { authorization } = req.headers 
  console.log("asdf",req.headers)
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      // Get Token from header
      token = authorization.split(' ')[1]

      // Verify Token
      const { userID } = jwt.verify(token, config.JWT_SECRET_KEY)

      // Get User from Token
      req.user = await authModel.findById(userID).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401).send({ "status": "failed", "message": "Unauthorized User" })
    }
  }
  if (!token) {
    res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
  }
}

export default auth