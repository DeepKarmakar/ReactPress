const mongoose = require('mongoose')
const { Schema } = mongoose;


const model = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	content: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	views: {
		type: Number,
		required: false
	},
	readTime: {
		type: Number,
		required: false
	},
	isStar: {
		type: Boolean,
		required: false
	},
	date: {
		type: Date,
		required: true
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},

})

module.exports = new mongoose.model('Post', model)