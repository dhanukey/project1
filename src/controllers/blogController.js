const blogModel = require("../models/blogMOdel")
const authorModel= require("../models/authorModel")

const createblog= async function (req, res) {
    let dev= req.body

    authorid = dev.authorid
     
    const k = await authorModel.find({_id: authorid})
    if(!k){
       return res.status(400).send("please provide valid user")
    }


    let blog = await blogModel.create(dev)
    res.status(200).send({data: dev})

}


 const getdata = async function(req, res){

    let auth = req.query.authorId
    let cat=  req.query.category
    let tag= req.query.tag
    

    let stud = await blogModel.find({ $and: [{isDeleted: false}, {isPublished: true}]}).select({name:1})
    res.send({stud})

 }

//  const getstudents= async function (req, res) {
//      let batch= req.query.program

//      let percentage = req.query.percentage
//       console.log(batch)

      


//       let batchdetail = await programModel.find({name:batch}).select({_id:1})
//       let result =await DevModel.find({percentage: {$gte:percentage} ,batch: batchdetail }).populate('batch')

//     //   console.log(batchdetail)
//       console.log(result)
//       res.send(result)

//  }
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createblog = createblog
//  module.exports.scholars= scholars

//  module.exports.getstudents= getstudents
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
