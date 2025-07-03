const jwt = require('jsonwebtoken')
const secretKey = 'asqe)12k>-+1dome1260'

const createToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '7d' })
}

const decodeToken = (token) => {
  return jwt.decode(token, secretKey)
}

module.exports = {
  createToken,
  decodeToken
}
