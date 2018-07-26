const cookie = require('cookie')

const passKey = '9aIkpJ5UdL+V73h9zoVNPb5LAEeRMiPVucw0q+cYJXK6wyOO+0VzkXR+w6mmU'

const jwt = require('jsonwebtoken')
const bp = require('body-parser')
const main = require('./socket/main.js')
const users = require('./routes/new.js')
const appointment = require('./routes/appointment.js')

const mongo = require('./routes/db.js')

let db

const dbCheck = setInterval(() => {
  const x = mongo.db()
  if (x && x !== undefined && x !== null) {
    db = x
    clearInterval(dbCheck)
  }
}, 300)

const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const fs = require('fs')

const port = 80
const location = 'http://localhost'

app.use(cors())
app.use(bp())
app.get('/', (req, res) => {
	const cookies = cookie.parse(req.headers.cookie || '')
	if (!cookies || !cookies.user) {
		res.status(401)
		res.sendFile(path.resolve("dist/home/index.html"))
	} else {
		jwt.verify(cookies.user, passKey, (err, decoded) => {
		if (err || !decoded || !decoded.type) {
			console.log(err)
			res.sendFile(path.resolve("dist/home/index.html"))
			res.end()
		} else {
			if (decoded.type === 'admin') {
			res.sendFile(path.resolve("dist/backbone/index.html"))
			} else if (decoded.type === 'vendor') {
				res.sendFile(path.resolve("dist/vendor/index.html"))
			} else {
				res.sendFile(path.resolve("dist/home/index.html"))
			}
		}
	})
	}
})

app.use('/api/appointment', appointment)

app.use('/api/users', users)
app.use('/dist', express.static("dist"))

const http = require('http').Server(app)

const io = require('socket.io')(http)

const socket = require('./socket/main.js').socketServer
io.on('connection', main)

http.listen(8000 || process.env.PORT, () => {
	console.log("listening on port " + port)
})

module.exports.io = function () {
	return io
}