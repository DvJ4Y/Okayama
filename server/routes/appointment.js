const cookie = require('cookie')
const jwt = require('jsonwebtoken')
const passKey = '9aIkpJ5UdL+V73h9zoVNPb5LAEeRMiPVucw0q+cYJXK6wyOO+0VzkXR+w6mmU'

const appointments = []

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

const router = require('express').Router()

router.post('/new', (req, res) => {
	appointments.push(req.body)
	console.log(appointments)
	res.end()
})

router.get('/', (req, res) => {
	res.json(appointments)
})

module.exports = router