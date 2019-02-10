# typeforce-middleware
[![build status](https://secure.travis-ci.org/dcousens/typeforce-middleware.png)](http://travis-ci.org/dcousens/typeforce-middleware)
[![Version](http://img.shields.io/npm/v/typeforce-middleware.svg)](https://www.npmjs.org/package/typeforce-middleware)

Typeforce applied as a connect middleware.

**WARNING:** Typeforce strict flag is enabled by default.


## Examples

``` javascript
const express = require('express')
const bodyParser = require('body-parser')
const typeforceM = require('typeforce-middleware')
const app = express()

app.post('/comment', bodyParser.json(), typeforceM({
	title: 'String',
	content: 'String'
}), (req, res) => {
	// ...

// optional: errors are propagated as `err` in fall-through
}, (err, req, res, next) => {
	// ...

	res.status(400).end(err.message)
})

// ...
const typeforce = require('typeforce')

// enforces an `:id` string of length:8
app.get('/comment/:id', typeforceM({
	id: typeforce.StringN(8)
}, true, 'params'), (req, res) => {
	// ...
	assert(req.params.id.length === 8)

	// ...
})
```


## LICENSE [MIT](LICENSE)
