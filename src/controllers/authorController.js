const AuthorModel= require("../models/authorModel")

//------------------------------------------------Author Validation ------------------------------------------------------------------------

const handleError= (err) =>{

let errors = { fname: '',lname: '', title: '', email:'',password:''}

if(err.code ===11000){
    errors.email =' the email is already registered'
    return errors;
  }

if (err.message.includes('Author validation failed')){

  Object.values(err.errors).forEach(({properties}) => {
   errors[properties.path]= properties.message;
  });

return errors;
}}

//------------------------------------------------Create Author ------------------------------------------------------------------------

const createAuthor= async function(req,res) {
try{
    let data = req.body
    
    let author = await AuthorModel.create(data)
    res.status(201).send({ data: author })
  
}catch (error) {
  const errors = handleError(error)
  res.send({errors})
  }
}

module.exports.createAuthor = createAuthor
