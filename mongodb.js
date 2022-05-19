// Init the server: /Users/[MEU USER AQUI]/mongodb/bin/mongod --dbpath=/Users/[MEU USER AQUI]/mongodb-data
// CRUD Testing: Create, read, update and delete
const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// Testing
// const id = new ObjectId()
// console.log(id.toHexString())
// console.log(id.getTimestamp())

// Utils
const prettifyIDs = (obj) => {
	return Object.keys(obj).map(function(k){return obj[k]}).join(", ")
}


// ------- Creation tests! --------
// MongoClient.connect(
// 	connectionUrl, 
// 	{ useNewUrlParser: true }, 
// 	( error, client ) => {
// 		if ( error ) {
// 			return console.log('Unable to connect to database!')
// 		}

// 		const db = client.db(databaseName)


// 		// Adding one user
// 		// db.collection('users').insertOne({
// 		// 	name: 'laurinha',
// 		// 	age: 1
// 		// }, ( error, result ) => {
// 		// 	if ( error ) {
// 		// 		return console.log('Unable to insert user')
// 		// 	}

// 		// 	console.log('User added! ID: ' + result.insertedId)
// 		// })



// 		// Adding many users
// 		// db.collection('users')
// 		// .insertMany([
// 		// 	{
// 		// 		name: 'sandrao',
// 		// 		age: 35
// 		// 	},
// 		// 	{
// 		// 		name: 'atumalaca',
// 		// 		age: 45
// 		// 	}
// 		// ], ( error, result ) => {
// 		// 	if ( error ) {
// 		// 		return console.log('Unable to insert users')
// 		// 	}

// 		// 	const prettifyIDs = (obj) => {
// 		// 		return Object.keys(obj).map(function(k){return obj[k]}).join(", ")
// 		// 	}

// 		// 	console.log('Users added! IDs: ' + prettifyIDs(result.insertedIds))
// 		// })



// 		// Adding many tasks
// 		// db.collection('tasks')
// 		// .insertMany([
// 		// 	{
// 		// 		description: 'pedir pizza no sandrao',
// 		// 		completed: true
// 		// 	},
// 		// 	{
// 		// 		description: 'lavar o banheiro',
// 		// 		completed: false
// 		// 	},
// 		// 	{
// 		// 		description: 'dar carinho pra laurinha',
// 		// 		completed: true
// 		// 	},
// 		// ], ( error, result ) => {
// 		// 	if ( error ) {
// 		// 		return console.log('Unable to insert tasks')
// 		// 	}
// 		// 	console.log('Tasks added! IDs: ' + prettifyIDs(result.insertedIds))
// 		// })
// 	}
// )


// ------- Reading tests! --------
// MongoClient.connect(
// 	connectionUrl, 
// 	{ useNewUrlParser: true }, 
// 	( error, client ) => {
// 		if ( error ) {
// 			return console.log('Unable to connect to database!')
// 		}

// 		const db = client.db(databaseName)

// 		// Search one user
// 		// db.collection('users')
// 		// .findOne(
// 		// 	{ 
// 		// 		// name: 'laurinha' 
// 		// 		_id: new ObjectId('628442550b40f545ff068d2f')
// 		// 	}, 
// 		// 	( error, user ) => {
// 		// 		if ( error ) {
// 		// 			return console.log('Unable to search user')
// 		// 		}

// 		// 		console.log(user)
// 		// 	}
// 		// )

// 		// Search many users
// 		// db.collection('users')
// 		// .find({ age: 1 })
// 		// .toArray( 
// 		// 	( error, users ) => {
// 		// 		if ( error ) {
// 		// 			return console.log('Unable to search users')
// 		// 		}

// 		// 		console.log(users)
// 		// 	}
// 		// )

// 		// Count many users
// 		// db.collection('users')
// 		// .countDocuments({
// 		// 	age: 1
// 		// })
// 		// .then(( qty ) => {
// 		// 	console.log(qty + ' users on DB!')
// 		// })

// 		// Search a task
// 		// db.collection('tasks')
// 		// .findOne({ 
// 		// 	_id: new ObjectId('628447b484d651866b928090')
// 		// }, 
// 		// ( error, tasks ) => {
// 		// 	if ( error ) {
// 		// 		return console.log('Unable to search task!')
// 		// 	}

// 		// 	console.log('\nFound tasks:')
// 		// 	console.log(tasks)
// 		// })

// 		// Search incomplete tasks
// 		// db.collection('tasks')
// 		// .find({ 
// 		// 	completed: false
// 		// })
// 		// .toArray( 
// 		// 	( error, tasks ) => {
// 		// 		if ( error ) {
// 		// 			return console.log('Unable to search tasks')
// 		// 		}

// 		// 		console.log('\nIncomplete tasks:')
// 		// 		console.log(tasks)
// 		// 	}
// 		// )
// 	}
// )




// // ------- Updating tests! --------
// MongoClient.connect(
// 	connectionUrl, 
// 	{ useNewUrlParser: true }, 
// 	( error, client ) => {
// 		if ( error ) {
// 			return console.log('Unable to connect to database!')
// 		}

// 		const db = client.db(databaseName)

// 		// Update one user
// 		// const updatePromise = db.collection('users').updateOne({ 
// 		// 	_id: new ObjectId('628446815a1b808ad5c31f90')
// 		// }, {
// 		// 	$set: {
// 		// 		name: 'Laura Palmer'
// 		// 	}
// 		// })

// 		// updatePromise.then(( result ) => {
// 		// 	console.log(result)
// 		// }).catch(( error ) => {
// 		// 	console.log(error)
// 		// })

// 		// Update one user (writing it simpler)
// 		// db.collection('users').updateOne({ 
// 		// 	_id: new ObjectId('628446815a1b808ad5c31f90')
// 		// }, {
// 		// 	$set: {
// 		// 		name: 'laurinha'
// 		// 	}
// 		// }).then(( result ) => {
// 		// 	console.log(result)
// 		// }).catch(( error ) => {
// 		// 	console.log(error)
// 		// })

// 		// Incrementing an user age
// 		// db.collection('users').updateOne({ 
// 		// 	_id: new ObjectId('628446815a1b808ad5c31f90')
// 		// }, {
// 		// 	$inc: {
// 		// 		age: 1
// 		// 	}
// 		// }).then(( result ) => {
// 		// 	console.log(result)
// 		// }).catch(( error ) => {
// 		// 	console.log(error)
// 		// })

// 		// Updating many tasks to 'completed' == true status
// 		// db.collection('tasks').updateMany({ 
// 		// 	completed: false
// 		// }, {
// 		// 	$set: {
// 		// 		completed: true
// 		// 	}
// 		// }).then(( result ) => {
// 		// 	console.log(result)
// 		// }).catch(( error ) => {
// 		// 	console.log(error)
// 		// })
// 	}
// )






// ------- Delete tests! --------
// MongoClient.connect(
// 	connectionUrl, 
// 	{ useNewUrlParser: true }, 
// 	( error, client ) => {
// 		if ( error ) {
// 			return console.log('Unable to connect to database!')
// 		}

// 		const db = client.db(databaseName)

// 		// Delete many users
// 		// db.collection('users').deleteMany({ 
// 		// 	age: 1
// 		// }).then(( result ) => {
// 		// 	console.log(result)
// 		// }).catch(( error ) => {
// 		// 	console.log(error)
// 		// })

// 		// Delete one task
// 		// db.collection('tasks').deleteOne({ 
// 		// 	description: 'lavar o banheiro'
// 		// }).then(( result ) => {
// 		// 	console.log(result)
// 		// }).catch(( error ) => {
// 		// 	console.log(error)
// 		// })
// 	}
// )
