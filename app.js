import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import oxygenRouter from './routers/oxygen.js'
import authRouter from './routers/auth.js'
import ambulanceRouter from './routers/ambulance.js'
import ngoRouter from './routers/ngo.js'

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser());

app.use('/oxynet',oxygenRouter)
app.use('/ambulance',ambulanceRouter)
app.use('/ngo',ngoRouter)
app.use('/api',authRouter)
app.get('/',(req,res) => {
	console.log('hi',req.body)
	return res.json({status:'ok'})
})

export default app