let express = require("express")

let app = express()

app.use(express.urlencoded({extended: false}))
app.get("/", function (req, res){
    res.send(`
        <h1>What is the color of the sky on a sunny day? </h1>
        <form action="/evaluate" method="POST" id="form">
            <input name="skyColor" type="text" autocomplete ="off" > 
            <button type="submit">Submit answer</button>
        </form>
    `)
})
app.post("/evaluate",function(req , res) {
    if(req.body.skyColor == "blue")
    {
        res.send(`
        <h1>sahi jawab</h1>
        <p><a href="/">get back to HomePage</a></p>`)
    }
    res.send(`<h1>jiii nahhii</h1>
    <p><a href="/">get back to HomePage</a></p>
    `)
})



let port=3000
app.listen(port , ()=>{
    console.log(`listening to ${port} .`)
})