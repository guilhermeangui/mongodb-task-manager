// Init the server: /Users/[MEU USER AQUI]/mongodb/bin/mongod --dbpath=/Users/[MEU USER AQUI]/mongodb-data
// CRUD Testing: Create, read, update and delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(
	connectionUrl, 
	{ useNewUrlParser: true }, 
	(error, client) => {
		if ( error ) {
			return console.log('Unable to connect to database!')
		}

		console.log('Connected correctly!')
	}
)