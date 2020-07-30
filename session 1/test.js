// creating a basic server using only node.js

let http = require("http")
let ourapp = http.createServer(function(req,res){
        if(req.url=="/")
        {
            res.end("hello i am lurking here!")
        }
        else if(req.url=="/death")
        {
            res.end("so you have chosen death")
        }
        else{
            res.end("Something Fishy hmmmmmm!")
        }
})
let port =80
ourapp.listen(port,function(){
    console.log(`listening to port ${port} .`)
})
