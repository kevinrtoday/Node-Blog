const { model, Schema } = require("mongoose");

const BlogSchema = Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  body: {
    type: String,
  },
  author: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports = model("blog", BlogSchema);
