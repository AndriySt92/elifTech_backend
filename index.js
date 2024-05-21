import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db/connectDB.js'
import eventRouter from "./routes/eventRouter.js";

const app = express()
dotenv.config()
connectDB()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api/event', eventRouter)

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
  })