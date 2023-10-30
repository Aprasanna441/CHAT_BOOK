import express from 'express'
import cors from 'cors'
import  Router  from 'express'
import dotenv from 'dotenv'

import connectDb from './config/connectDb.js'


dotenv.config()
const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL

const app=express()
app.use(cors())
connectDb(DATABASE_URL)
app.use(express.json())




app.listen(port,()=>{
console.log(`Server connected at port  ${port}`)
})
