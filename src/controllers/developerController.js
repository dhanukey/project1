const DevModel = require("../models/developerMOdel")
const programModel= require("../models/programModel")

const createDev= async function (req, res) {
    let dev= req.body
    let devCreated = await DevModel.create(dev)
    res.send({data: devCreated})
}


const scholars = async function(req, res){
    let stud = await DevModel.find({ $and: [{gender: "female"}, {percentage: {$gte: 70}}]}).select({name:1})
    res.send({stud})

}

 const getstudents= async function (req, res) {
     let batch= req.query.program

     let percentage = req.query.percentage
      console.log(batch)

      


      let batchdetail = await programModel.find({name:batch}).select({_id:1})
      let result =await DevModel.find({percentage: {$gte:percentage} ,batch: batchdetail }).populate('batch')

    //   console.log(batchdetail)
      console.log(result)
      res.send(result)

 }
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createDev = createDev
 module.exports.scholars= scholars

 module.exports.getstudents= getstudents
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
