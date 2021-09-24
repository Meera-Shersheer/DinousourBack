const Mongoose = require('mongoose')
//1- create mongodb schema
const commentSchmea = new Mongoose.Schema({
comment : {type:String , required: true}
//score : {type:Number , required: true} 
})

//2-export module
module.exports = Mongoose.model('commentSchema' , commentSchmea )
//consle.log("hi");