const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items =[ "MORNNG WORKOUT", "DSA PRACTISE", "WEB DEVELOPMENT"] ;
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
 

  let day= date();
  

  res.render("list", {listTitle: day, newlistItems: items });


});

app.post("/", function(req, res){
  
  var item = req.body.newItem;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/Work)");
  }else {
    items.push(item);

    res.redirect("/");
  
  }

  
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work list", newlistItems: workItems});
});
 

app.get("/about", function(req,res){
res.render("about");
});
app.listen(3002, function() {
  console.log("Server started on port 3000");
}); 
     
