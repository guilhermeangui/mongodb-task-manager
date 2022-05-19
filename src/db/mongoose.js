const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
})



// Creating an user
// const User = mongoose.model('User', {
// 	name: {
// 		type: String
// 	},
// 	age: {
// 		type: Number
// 	}
// })

// const me = new User({
// 	name: 'anguissauro',
// 	age: 27
// })

// me.save().then(() => {
// 	console.log(me)
// }).catch((error) => {
// 	console.log('Error!', error)
// })






// Creating a task
// const Task = mongoose.model('Task', {
// 	description: {
// 		type: String
// 	},
// 	completed: {
// 		type: Boolean
// 	}
// })

// const task = new Task({
// 	description: 'lavar o banheiro',
// 	completed: false
// })

// task.save().then(() => {
// 	console.log(task)
// }).catch((error) => {
// 	console.log('Error!', error)
// })






// Creating an user with validations
// const User = mongoose.model('User', {
// 	name: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		lowercase: true,
// 		validate(value) {
// 			if( !validator.isEmail(value) ) {
// 				throw new Error('Email is invalid')
// 			}
// 		}
// 	},
// 	age: {
// 		type: Number,
// 		default: 0,
// 		validate(value) {
// 			if ( value < 0 ) {
// 				throw new Error('Age must be a positive number')
// 			}
// 		}
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		minlength: 7,
// 		validate(value) {
// 			if ( value.toLowerCase().includes('password') ){
// 				throw new Error('Cant have "password" on your password!')
// 			}
// 		}
// 	}
// })

// const me = new User({
// 	name: '      anguissauro      ',
// 	email: 'VAMODALEEEEEE@asdasd.com',
// 	password: 'zxcxzczxc'
// })

// me.save().then(() => {
// 	console.log(me)
// }).catch((error) => {
// 	console.log('Error!', error)
// })




// Creating a task with validations
const Task = mongoose.model('Task', {
	description: {
		type: String,
		required: true,
		trim: true,
	},
	completed: {
		type: String,
		default: false,
	},
})

const task = new Task({
	description: 'coco',
})

task.save().then(() => {
	console.log(task)
}).catch((error) => {
	console.log('Error!', error)
})
