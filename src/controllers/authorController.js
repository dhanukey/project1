const AuthorModel= require("../models/authorModel")

//------------------------------------------------Solution 1 ------------------------------------------------------------------------

const createAuthor= async function(req, res) {
try{
    let author = req.body
    let authors = await AuthorModel.create(author)
    res.send({data: authors})
 } catch (error) {
        return res.status(500).send({ error: error.message });
      }
}

module.exports.createAuthor = createAuthor
