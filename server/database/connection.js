const mongoose = require('mongoose');

const connectDB =async()=>{

    const con = await mongoose.connect(process.env.MONGO_URI,{
        
        // useFindAndModify:false,
        // useCreateIndex:true ,

        //---MongoParseError:these are not supported -----so-------

        useNewUrlParser: true, 
        useUnifiedTopology: true

    }).then(() => console.log("connected")).catch((e) => console.log(e))
}

module.exports=connectDB