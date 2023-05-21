const User = require('../schema/user')
const bcrypt = require('bcrypt')
const Constants = require('../constants/constant')
const jwt = require('jsonwebtoken')
const tokenSecret = Constants.TOKENSECRET;
const saltRounds = 10
require('dotenv').config();
const { responseMessages } = require('../utilities/responseMessage');


// Check if user is exist - it will return true/false
// 'query' eg: { email: req.body.email }
const isUserExist = async (query) => {
	let isExist;
	await User.findOne(query)
		.then(user => {
			if (!user) {
				isExist = false;
			} else {
				isExist = true;
			}
		})
		.catch(error => {
			console.log('Find user error');
		})

	return isExist;
}

// Login Method
exports.logIn = (req, res) => {
	User.findOne({ email: req.body.email })
		.then(user => {
			if (!user) {
				responseMessages(res, 500, false, Constants.RESPONSE.NOT_REGISTERED);
			} else {
				bcrypt.compare(req.body.password, user.password, (error, match) => {
					if (error) {
						responseMessages(res, 500, false, Constants.RESPONSE.ERROR_OCCURRED);
					} else if (match) {
						responseMessages(res, 200, true, Constants.RESPONSE.LOGIN_SUCCESS, { token: generateToken(user) });
					} else {
						responseMessages(res, 500, false, Constants.RESPONSE.PASSWORD_NOT_MATCHED);
					}
				})
			}
		})
		.catch(error => {
			res.status(500).json(error)
		})
}

// Sign-in/register method
exports.signIn = async (req, res) => {
	const saveUser = () => {
		const hash = bcrypt.hashSync(req.body.password, saltRounds);
		const newUser = User({
			name: req.body.name,
			email: req.body.email,
			password: hash,
			role: Constants.USER,
			status: Constants.APPROVED
		})

		newUser.save()
			.then(() => {
				responseMessages(res, 200, true, Constants.RESPONSE.REGISTERED_SUCCESS);
			})
			.catch(error => {
				responseMessages(res, 500, false, Constants.RESPONSE.REGISTERED_FAIL, error);
			})
	}

	if (await isUserExist({ email: req.body.email })) {
		responseMessages(res, 500, false, Constants.RESPONSE.REGISTERED_FAIL);
	} else {
		saveUser();
	}

}

// Get All Users
exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find(req.body.filter || {})
		responseMessages(res, 200, true, null, users);
	} catch (error) {
		responseMessages(res, 500, false, Constants.RESPONSE.ERROR_OCCURRED);
	}
}

// Token generate function
function generateToken(user) {
	return jwt.sign({ data: user }, tokenSecret, { expiresIn: '24h' })
}