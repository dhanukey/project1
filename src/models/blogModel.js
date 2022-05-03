const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title should be present'],
      trim: true
    },

    body: {
      type: String,
      required: [true, 'body should have content'],
      trim: true

    },

    tags: [String],

    category: {
      type: [String],
      validate:[v => Array.isArray(v) && v.length > 0,'Category should be present']
  },
    subcategory: {
      type: [String],
    },

    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,

    isDeleted: {
      type: Boolean,
      default: false,
    },

    publishedAt: {
      type: Date,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    authorId: {
      type: ObjectId,
      required: true,
      ref: "Author",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
