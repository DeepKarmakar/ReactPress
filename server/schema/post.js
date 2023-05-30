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
	isDraft: {
		type: Boolean,
		required: false
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	readTime: {
		type: Number,
		required: true
	}

})


model.method('transform', function () {
	var obj = this.toObject();

	//Rename fields
	obj.id = obj._id;
	delete obj._id;

	return obj;
});


module.exports = new mongoose.model('Post', model)