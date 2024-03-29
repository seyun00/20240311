const mongoose = require("mongoose");
// const commentSchema = require("./commentModel");

const postSchema = new mongoose.Schema({
    userID:{
      type:String,
      required: true,
    },
    user:{
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cost: {
      type: String, // 예시로 숫자 타입 사용, 필요에 따라 변경
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String, // 예시로 문자열 타입 사용, 필요에 따라 변경
      required: true,
    },
  });

module.exports = mongoose.model("Post",postSchema);