const commentSchmea = require ('../modules/comments')
const express = require('express')



const router = express.Router() 


// // Read
router.get('/comments', async (req,res)=>{
console.log("hi I'm working")
    const rs = await commentSchmea.find()
     return res.send(rs);
 })
// //creat / write
 router.post('/comments', async (req,res)=>{
   console.log("hi I'm working tooo")
console.log(req.body)
 const rm = await commentSchmea.create(req.body)
    return res.send(rm);
})

module.exports = router
// //3- use API from index point