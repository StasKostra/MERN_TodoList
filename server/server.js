import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes/index.js'
import dotenv from 'dotenv'



const app = express()
const PORT = 5000

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(todoRoutes)

const mongoDB = `${process.env.MONGO_URL}`
mongoose.connect(mongoDB)
    .then(() => app.listen(PORT, () => console.log("Server up and running!")))
    .catch((error) => console.log(error.message))

