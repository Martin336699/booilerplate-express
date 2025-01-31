 let express = require('express');
let app = express();

require('dotenv').config()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
   var string = req.method + " " + req.path + " - " + req.ip; 
   console.log(string);
   next();
});

app.get('/now', (req, res, next) => {
      req.time = new Date().toString();  
        next();
        }, function(req, res) {
          res.send({time: req.time});
         
});


app.get('/:word/echo', (req, res)=>{
  const word = req.params.word;
  res.send({echo: word})
})


app.get('/name', (req, res)=>{
  const name = req.query;
  const nameString = name.first + " " + name.last;
  res.json({ "name": nameString })
})

app.post('/name', (req,res)=>{
  const name = req.body;
  const nameString = name.first + " " + name.last;
  res.json({ "name": nameString });
})




const absolutePath = __dirname + '/views/index.html';

app.use("/public", express.static(__dirname + "/public"));


app.get('/',(req, res) => {
    res.sendFile(absolutePath)
})  

app.get('/json',(req,res)=> {
    
    if (process.env.MESSAGE_STYLE === "uppercase") {
          res.json({"message": "Hello json".toUpperCase()})
          } else {
           res.json({"message": "Hello json"})
            }})






































 module.exports = app;
