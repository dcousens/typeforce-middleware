var typeforce = require('typeforce')

module.exports = function middlewareConstructor (type, strict, key) {
  key = key || 'body'
  if (strict === undefined) {
    strict = true
  }

  var compiled = typeforce.compile(type)

  return function middleware (req, res, next) {
    try {
      typeforce(compiled, req[key], strict)
      next()
    } catch (e) {
      next(e)
    }
  }
}
