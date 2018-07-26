const cookie = require('cookie')
const jwt = require('jsonwebtoken')
const passKey = '9aIkpJ5UdL+V73h9zoVNPb5LAEeRMiPVucw0q+cYJXK6wyOO+0VzkXR+w6mmU'

const db = {
	users: {
		'gcc@admin': {
			password: 'password'
		}
	},
	findUser (user) {
		if (db.users[user]) {
			return db.users[user]
		}

		return false
	}
}

const pP = {}
const users = {}

const router = require('express').Router()

router.post('/new', (req, res) => {
	const o = req.body
	o.time = new Date()
	pP[Date.now()] = o
	res.end()
})

router.get('/new', (req, res) => {
	res.json(pP)
})

router.post('/confirm', (req, res) => {
	req.body.forEach((u) => {
		users[u.username] = u
		delete pP[u.username]
	})
	res.status(200)
	res.end()
})

router.post('/login', (req, res) => {
	const u = db.findUser(req.body.username)

	if (!u || u == false) {
		res.status(404)
		res.end()
	} else {
		if (req.body.password === u.password) {
                		console.log(req.body.type + ' - ' + req.body.username, " logged in")
                		res.status(200)
                		res.setHeader('Set-cookie',cookie.serialize('user',jwt.sign({name: req.body.username ,type: req.body.type},passKey)),{expiresIn: '1000hr',httpOnly:true,path: '/'})
                  		res.end()
                	}
	}
})

module.exports = router