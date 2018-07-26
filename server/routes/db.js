const mongo = require('mongodb');

let _db

mongo.connect("mongodb://localhost:27018/data").then((connection) => {
  _db = connection
}).catch((err) => {
  console.log(err)
})

module.exports.db = function () {
	return _db
}