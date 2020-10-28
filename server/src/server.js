import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"


// cors config
import {corsConfig} from "./config/corsConfig"

// importing routes
import homeRoute from "./routes/homeRoutes/_indexRoute"
import userRoute from "./routes/userRoutes/_indexRoute"


const app = express()

// db connection
mongoose.connect(process.env.DB_CONNECTION,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }).then(() => console.log("Database Connected"))
  .catch((err) => console.log(err))

//middlewares
app.use(cors(corsConfig))
app.use(morgan("tiny"))
app.use(cookieParser())
app.use(express.json())


// redirecting to the specific routes
app.use('/app/v1/home',homeRoute)
app.use('app/v1/user',userRoute)

app.use('/',(req,res,next)=>{ 
    res.send('welcome')
    res.cookie('abc','def',{h})
})


const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`server listening to ${port}`))