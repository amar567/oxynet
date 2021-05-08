import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Prod from './models/prod.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import verify_mail from './utils/mails/verify_mail.js'
// import fpw_mail from './utils/mails/fpw_mail'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { stat } from 'fs'
import { ok } from 'assert'
import routers from './routers/router.js'

const domain = 'http://amardeephk.xyz/redirect'

dotenv.config({ path: './config.env' });

const JWT_SECRET = process.env.JWT_SECRET

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser());

app.use('/oxynet',routers)

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

		await Prod.updateOne(
			{ _id },
			{
				$set: { password }
			}
		)
		res.json({ status: 'ok' })
		res.redirect(domain+"/login")
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'something went wrong' })
	}
})

app.post('/api/v1/users/login', async (req, res) => {

	const { contact, password } = req.body   // get contact deets and password from req

	// console.log(contact, password)

	const user = await Prod.findOne({$or:[{email:contact},{mobile:contact}]})	//importing userdata from mongodb 

	// console.log(user)

	if(contact==user.email||contact==user.mobile){			//this step is imp because for moongoose can find using incomplete contact also  

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

				return res.json({ status: 'ok', token: token, Id:user._id  })

			 }else{
				return res.json({ status: 'error', error: 'Password did\'nt match' })
			 }

	}else{
		return res.json({ status: 'error', error: 'check contact details!' })
	}
})

app.post('/api/v1/users/fpw/get', async (req, res) =>{

	console.log('fpw-req-initiated')
	const email = req.body.email // emailId of the user

	const user = await Prod.findOne({email}).lean()	//importing userdata from mongodb
	// console.log(email)

	if(user){
		//make an ott (one time token)
		const ott = jwt.sign(
			{
				email: email
			},
			JWT_SECRET,
			{ expiresIn: '10m' }
		)

		//create one time link
		const link = domain+`/?token=`+ ott
		
		// //send ott link
		fpw_mail(email,link) 
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
	const email = ott.email	//extracting email from query

	const user = await Prod.findOne({email}).lean()	//importing userdata from mongodb
	// console.log(user)

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid request' })		//checking for his existence
	}

	if(ott.email===user.email){			//now verify user
		//if true give him a cookie and redirect him to signed in page

		const token = jwt.sign(
			{
				id: user._id
			},
			JWT_SECRET
		)
		
		res.json({ status: 'ok', token:token ,Id:user._id })		//responding with token for his existence	
		res.redirect(domain+"/dashbord")
	}
})

app.post('/api/v1/users/signup/auth', async(req, res) => {
	
	console.log(req.body)

	const { name, mobile, password, email } = req.body

	// console.log(mobile)
	// console.log(password)
	// console.log(email)
	// console.log(name)

	//import userdata from mongodb 
	const user = await Prod.findOne({$or:[{email:email},{mobile:mobile}]})
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
					const link = domain+`/?token=`+ ott

					// send a mail to verify authenticity
					verify_mail(email,link,name)
					.then((result) => console.log('Email sent...', result))
					.catch((error) => console.log(error.message));
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
			const email = jswt.email
			const mobile = jswt.mobile
			const name = jswt.name
			const password = jswt.password

			const user = await Prod.findOne({$or:[{email:email},{mobile:mobile}]})	//importing userdata from mongodb 

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
						res.json({ status: 'ok', token:token ,Id:user._id })		//responding with token for his existence

					}else{
						return res.json({ status: 'error', error: 'It seems the entered credentials are already in use, try siging in' })
					}
			}
			else{		// make new user and respond with jwt
				
				try{
					
					const response = await Prod.create({
						email,
						password,
						mobile,
						name
					})
			
					console.log('Prod created successfully: ', response._id)
			
					const token = jwt.sign(
						{
							id: response._id
						},
						JWT_SECRET
					)
			
					// res.cookie("token",token,{maxAge:365*24*60*60,httpOnly: true})
					res.json({ status: 'ok', token:token, Id:response._id })		//responding with token for his existence
				}
				catch (e) {
					// res.send(404){status:"error",}
					console.log("entering catch block")
					console.log(e)
					console.log("somthing went wrong")
				}
			}

})

// app.post('/api/v1/users/auth', async(req,res)=>{
// 				const jwt = req.token
// 				const json = jwt.verify(token, JWT_SECRET)
// 				return json.id
// 				next()
// })

export default app