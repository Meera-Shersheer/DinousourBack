//console.log ("hello from backend")
const express = require ('express')




const app = express();
const routes = require ('./routes/commentsAPI')
const cors = require ('cors')
const port = 5500;
//2- run server using express library
app.listen(
    process.env.PORT ||
     port,function(){
    console.log("server is now listening at a port ")

})



//3-define and call mongoose library
const mongoose1 = require('mongoose')


// we replace <usename> and <password> with the project real username and password
const URLM = 'mongodb+srv://finalreview:ABC123Z@cluster0.a9wpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


//allow cors
app.use(cors())

// what function in mongoose package that help connrct to remote db
//used mongoose connect function to connect atlas db
mongoose1.connect(URLM)
.then(function(){console.log("successfully connected to a database")})
.catch(function(error){console.log(error);})

//4- use API from index point
app.use(express.json())
app.use('/api', routes)

