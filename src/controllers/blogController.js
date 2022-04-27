const blogModel = require("../models/blogModel")
const authorModel= require("../models/authorModel")
const moment=require('moment')


const createblog= async function (req, res) {
    let dev= req.body
    authorid = dev.authorId
     
    const k = await authorModel.find({_id: authorid})

    
    if(k.length<=0){
       return res.status(400).send("please provide valid user")
    }
    
    //  if(req.body.isPublished == true){
     
    //   dev.publishedAt = moment().format('YYYY-MM-DD')

    //  }

    
    let blog = await blogModel.create(dev)
     res.status(200).send({data: dev})

}


 const getdata = async function(req, res){

   data = req.query
   
   let stud = await blogModel.find({ $and: [{isDeleted: false}, {isPublished: true}, data]})
     if(stud.length<=0){

      return res.status(400).send({error: "No match found for the given criteria"})
     }

    console.log(stud)
    res.status(200).send({stud})

   
 }



      



module.exports.createblog = createblog
module.exports.getdata= getdata

