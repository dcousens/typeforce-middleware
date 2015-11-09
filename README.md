# typeforce-middleware

[![build status](https://secure.travis-ci.org/dcousens/typeforce-middleware.png)](http://travis-ci.org/dcousens/typeforce-middleware)
[![Version](http://img.shields.io/npm/v/typeforce-middleware.svg)](https://www.npmjs.org/package/typeforce-middleware)


## Examples

``` javascript
var express = require('express')
var bodyParser = require('body-parser')
var typeforce = require('typeforce-middleware')
var app = express()

app.post('/comment', bodyParser.json(), typeforce({
	title: 'String',
	content: 'String'
}, true), function (err, req, res, next) {
	if (err) return res.status(400).end(err.message)

	// ...

	res.status(200).end()
})
```

## LICENSE [MIT](LICENSE)

