const ProgramModel= require("../models/programModel")

const createProgram= async function(req, res) {
    let Program = req.body
    let programs = await ProgramModel.create(Program)
    res.send({data: programs})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createProgram = createProgram
// module.exports.getAuthorsData= getAuthorsData