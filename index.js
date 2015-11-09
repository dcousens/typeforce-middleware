var typeforce = require('typeforce')

module.exports = function middlewareConstructor (type, strict) {
  var compiled = typeforce.compile(type)

  return function middleware (req, res, next) {
    try {
      typeforce(compiled, req.body, strict)
      next()
    } catch (e) {
      next(e)
    }
  }
}
