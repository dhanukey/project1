const AuthorModel= require("../models/authorModel")

//------------------------------------------------Solution 1 ------------------------------------------------------------------------

const createAuthor= async function(req,res) {
try{
    let data = req.body
    
    let author = await AuthorModel.create(data)
    res.status(201).send({ data: author })
  
}catch (error) {
        return res.status(500).send({ error: error.message });
      }
}

module.exports.createAuthor = createAuthor
