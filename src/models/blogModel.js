const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
  
      },

      body:{
        type: String,
        required: true
  
      },

     tags:{
        type:[String],
        
     },
     category:{
        type:[String],
        required: true
     },

     subcategory:{
        type:[String]
        
     },

     createdAt: Date,
     updatedAt: Date,
     deletedAt: Date,

     isDeleted:{
        type: Boolean,
        default: false,
     },

     publishedAt:Date,


     isPublished:{
        type: Boolean,
        default: false,
     },

    authorId: {
        type:ObjectId,
        ref: "Author1"}
}, { timestamps: true });


module.exports = mongoose.model('blog', developerSchema)
