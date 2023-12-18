import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const uri = process.env.MONGODB_URI ?? ''
const PORT = process.env.PORT ?? 5050

if (uri !== '') {
  mongoose
    .connect(uri)
    .then(() => {
      console.log('DB connected !')
    })
    .catch(err => {
      console.log(err)
    })
} else {
  console.log('No URI to DB !')
}

const app = express()

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT} => url : http://localhost:${PORT}`)
})
