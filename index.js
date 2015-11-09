var typeforce = require('typeforce')

module.exports = function middlewareConstructor (type, strict) {
  let cType = typeforce.compile(type.arguments)

  return function middleware (req, res, next) {
    try {
      typeforce(cType, req.body, strict)
      next()
    } catch (e) {
      next(e)
    }
  }
}
