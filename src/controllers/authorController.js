const AuthorModel= require("../models/authorModel")

const createAuthor= async function(req, res) {
    let author = req.body
    let authors = await AuthorModel.create(author)
    res.send({data: authors})


}



module.exports.createAuthor = createAuthor
