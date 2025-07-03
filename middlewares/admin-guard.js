const { decodeToken } = require('../utils/jwt.config')

const adminGuard = (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')[1] || null
  const decoded = decodeToken(token)
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'token unauthorized'
    })
  }
  if (token && decoded.exp <= Date.now() / 1000) {
    return res.status(401).json({
      success: false,
      message: 'token unauthorized'
    })
  }
  if (!['ADMIN'].includes(decoded.role)) {
    return res.status(401).json({
      success: false,
      message: 'permission denied'
    })
  }

  next()
}

module.exports = {
  adminGuard
}
