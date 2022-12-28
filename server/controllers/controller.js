const { query } = require("express");
var Userdb = require("../models/model");


exports.create=async (req,res,next)=>{
    if(!req.body){
        console.log('------>Empty<-------')
        res.status(400).send({message:"Content cannot be empty"})
        return
    }

    const user = new Userdb ({
        name   : req.body.name,
        email  : req.body.email,
        gender : req.body.gender,
        status : req.body.status
    })

    console.log(user)
 
   user
    .save(user)
    .then(data=>{
        
        // res.send(data)
        res.redirect("/add_user")
        
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send({
            message:err.message || "some error occured while creating a create operation"
        })
    })
}

exports.find=(req,res)=>{
    if(req.query.id){
        const id =req.query.id;

        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message : "not found user with ID : "+ id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"error retriving user with ID"+id})
        })
    }

   Userdb.find()
   .then(user=>{
    res.send(user)
   })
   .catch(err=>{
    res.status(500).send({message:err.message || "error found while finding this ID"})
   
   })
}

exports.update=(req,res)=>{
    if(!req.body){
        return res 
        .status(400)
        .send({message:"Data to be update should not be null--------!"})
    }
    const id =req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
    .then(data=>{
        if(!data){
            res.status(404).send({message :`connect update user with ${id}.may be user not found`})
        }
        else{
            res.send(data)
        }   
    })
    .catch(err=>{
        res.status(500).send({message:"error updating user informaiton"})
    }) 

}

// exports.update = (req, res)=>{
//     if(!req.body){
//         return res
//             .status(400)
//             .send({ message : "Data to update can not be empty"})
//     }

//     const id = req.params.id;
//     Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
//         .then(data => {
//             if(!data){
//                 res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
//             }else{
//                 res.send(data)
//             }
//         })
//         .catch(err =>{
//             res.status(500).send({ message : "Error Update user information"})
//         })
// }

exports.delete=(req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message : `connot delete with id ${id}.May be id not found`})
        }else{
            res.send({message  :"user was delete successfully"})
        }
    })
    .catch(err=>{
        res.status(500).send({message :"could not delete the user with ID"+id})
    })
}

