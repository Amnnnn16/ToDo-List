import express from "express";
import bodyParser from "body-parser"

const app=express();
const port=4000;
var tasks=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",(req,res) =>{

res.render("index.ejs");
}
)

app.post("/submit",(req,res) => {
    var entry=req.body.task;
tasks.push(entry);
// console.log(tasks[1]);

res.render("index.ejs",{ 
    tasks:tasks
});
})




app.listen(port,() => {
    console.log(`Server running on port ${port}`);
})