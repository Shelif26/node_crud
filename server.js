const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require("./server/database/connection")

const app = express();

dotenv.config({path : 'config.env'})
const PORT = process.env.PORT || 3002

//log request
app.use(morgan('tiny'))

//------mongo connection-------
connectDB();

//------parse request to body-parser

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


//-----set engine
app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname,"views"))


//------loading assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))



app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log(`Server running on http://localhost:${PORT} connected successfully `)
});