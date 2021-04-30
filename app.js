const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verify_mail = require('./utils/mails/verify_mail')
const fpw_mail = require('./utils/mails/fpw_mail')
var cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const { stat } = require('fs')
const { ok } = require('assert')

const domain = 'http://localhost:3005'

dotenv.config({ path: './config.env' });

const JWT_SECRET = process.env.JWT_SECRET

// mongoose.connect(process.env.DATABASE, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	useCreateIndex: true
// })

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser());

app.get('/',(req,res) => {
	console.log('hi',req.body)
	return res.json({status:'ok'})
})

app.patch('/api/v1/users/change-pw', async (req, res) => {
	console.log(req)
	const { token, newpassword: plainTextPassword } = req.body

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	try {
		const user = jwt.verify(token, JWT_SECRET)

		const _id = user.id

		const password = await bcrypt.hash(plainTextPassword, 10)

		await User.updateOne(
			{ _id },
			{
				$set: { password }
			}
		)
		res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: ';)' })
	}
})

app.post('/api/v1/users/login', async (req, res) => {

	const { contact, password } = req.body   // get contact deets and password from req

	// console.log(contact, password)

	const user = await User.findOne({$or:[{email:contact},{mobile:contact}]})	//importing userdata from mongodb 

	// console.log(user)

	if(contact==user.email){			//this step is imp because for moongoose can find using incomplete contact also  

		if (await bcrypt.compare(password, user.password)) {
			// the username, password combination is successful
				
				const token = jwt.sign(
					{
						id: user._id
					},
					JWT_SECRET
				)
        
        // // check if the jwt is signed properly
				// const tok = jwt.verify(token, JWT_SECRET)
				// console.log(tok)

				return res.json({ status: 'ok', token: token })

			 }else{
				return res.json({ status: 'error', error: 'Password did\'nt match' })
			 }

	}else{
		return res.json({ status: 'error', error: 'check contact details!' })
	}
})

app.post('/api/v1/users/fpw/get', async (req, res) =>{

	console.log('fpw-req-initiated')
	const mail = req.body.mail // emailId of the user

	const user = await User.findOne({mail}).lean()	//importing userdata from mongodb
	// console.log(mail)

	if(user){
		//make an ott (one time token)
		const ott = jwt.sign(
			{
				mail: mail
			},
			JWT_SECRET,
			{ expiresIn: '10m' }
		)

		//create one time link
		const link = domain+`/api/v1/users/fpw/auth?token=`+ ott
		
		// //send ott link
		fpw_mail(mail,link) 
		// console.log(link)

		res.json({ status: 'ok'})
	}else{
		res.json({ status: 'error', msg:'user not found!'})
	}

})

app.get('/api/v1/users/fpw/auth',async(req,res)=>{

	// console.log('auth via link initiated')
	// console.log(req.query.token)
	// console.log(req.query.mailId)

	const token = req.query.token	//extracting ott from query = onetimetoken
	const ott = jwt.verify(token, JWT_SECRET)	//  extracting email-id from ott = onetimetoken	
	const mail = ott.mail	//extracting mail from query

	const user = await User.findOne({mail}).lean()	//importing userdata from mongodb
	// console.log(user)

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid request' })		//checking for his existence
	}

	if(ott.mail===user.mail){			//now verify user
		//if true give him a cookie and redirect him to signed in page

		const token = jwt.sign(
			{
				id: user._id
			},
			JWT_SECRET
		)
		
		res.json({ status: 'ok', "token":token })		//responding with token for his existence	
		res.redirect(domain+"/dashbord")
	}
})

app.post('/api/v1/users/signup/auth', async(req, res) => {
	
	// console.log(req.body)

	const { name,mobile, password, email } = req.body

	// console.log(mobile)
	// console.log(upassword)
	// console.log(name)
	// console.log(email)

	//import userdata from mongodb 
	const user = await User.findOne({$or:[{email:email},{mobile:mobile}]})
	// console.log(user)

	// console.log(user)

	// if user exists respond with error: user exists!
	if(user){
		console.log(user);
		console.log("duplicate user!")
		return res.json({ status: 'error', error: 'Username already in use' });
	}

	// else send a verification code
	else{

		// send a verification mail
		if (true) {
				// send whole info via JWT
					// console.log('fpw-req-initiated')
					// const mailId = email		// emailId of the user
					//make an ott (one time token)
					const ott = jwt.sign(
						{
							email : email,
							mobile : mobile,
							name : name,
							// bcrypt hashing password for safety
							password : await bcrypt.hash(password, 10)
						},
						JWT_SECRET
					)
					//create one time link
					const link = domain+`/api/v1/users/signup/verify?token=`+ ott

					// send a mail to verify authenticity
					verify_mail(email,link,name)
					// console.log(link)
					return res.json({ status: 'ok', msg: 'email sent' })
				}

		}

})

app.get('/api/v1/users/signup/verify', async(req,res)=> {

			// console.log('auth via link initiated')
			// console.log(req.query.token)
	
			const ott = req.query.token	//extracting ott from query = onetimetoken
			const jswt = jwt.verify(ott, JWT_SECRET)	//  extracting email-id from ott = onetimetoken
	
			// console.log(jswt)
			
			// extract user info form jswt 
			const email = jswt.mail
			const mobile = jswt.mobile
			const uname = jswt.name
			const password = jswt.password

			const user = await User.findOne({$or:[{email:email},{mobile:mobile}]})	//importing userdata from mongodb 

			if(user){			//this step is imp because for moongoose can find using incomplete contact also  

				if (user.password==password) {
					// if the password combination is successful make and send jwt with user id
						
						const token = jwt.sign(
							{
								id: user._id
							},
							JWT_SECRET
						)
				
				// // verify if the jwt is signed properly
						// const tok = jwt.verify(token, JWT_SECRET)
						// console.log(tok)

						res.cookie("token",token,{maxAge:365*24*60*60,httpOnly: true})
						res.json({ status: 'ok', "token":token })		//responding with token for his existence

					}else{
						return res.json({ status: 'error', error: 'It seems the entered credentials are already in use, try siging in' })
					}
			}
			else{		// make new user and respond with jwt
				
				try{
					
					const response = await User.create({
						email,
						password,
						mobile,
						uname
					})
			
					console.log('User created successfully: ', response._id)
			
					const token = jwt.sign(
						{
							id: response._id
						},
						JWT_SECRET
					)
			
					res.cookie("token",token,{maxAge:365*24*60*60,httpOnly: true})
					res.json({ status: 'ok', "token":token })		//responding with token for his existence	
				}
				catch (e) {
					// res.send(404){status:"error",}
					console.log("entering catch block")
					console.log(e)
					console.log("somthing went wrong")
				}
			}

})

module.exports = app;