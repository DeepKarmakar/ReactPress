const Constants = require('../constants/constant');
const Post = require('../schema/post');
const { responseMessages } = require('../utilities/responseMessage');

exports.createNew = async (req, res) => {
	const newPosts = Post({
		title: req.body.title,
		content: req.body.content,
		category: req.body.category,
		date: req.body.date,
		author: req.body.author,
	})

	await newPosts.save()
		.then(() => {
			responseMessages(res, 200, true, Constants.RESPONSE.POST_SUCCESS);
		})
		.catch(error => {
			console.log(error);
			responseMessages(res, 500, false, Constants.RESPONSE.ERROR_OCCURRED, error);
		})
}

exports.allPosts = async (req, res) => {
	try {
		const posts = await Post.find(req.body.filter || {}).populate('author', 'name').exec();
		responseMessages(res, 200, true, null, posts);
	} catch (error) {
		responseMessages(res, 500, false, Constants.RESPONSE.ERROR_OCCURRED);
	}
}

exports.singlePost = async (req, res) => {
	try {
		const post = await Post.findById(req.query.id).populate('author', 'name').exec();
		responseMessages(res, 200, true, null, post);
	} catch (error) {
		responseMessages(res, 500, false, Constants.RESPONSE.ERROR_OCCURRED);
	}
}

exports.updatePost = async (req, res) => {
	try {
		const post = await Post.updateOne(
			{ _id: req.query.id },
			req.body
		)
			.populate('author', 'name').exec();
		responseMessages(res, 200, true, 'Successfully Updated');
	} catch (error) {
		responseMessages(res, 500, false, Constants.RESPONSE.ERROR_OCCURRED);
	}
}