var express=require("express");
var app=express();

const cors = require('cors')

const{MongoClient,ObjectId}=require("mongodb");
var url="mongodb://127.0.0.1:27017";

app.options("*", cors())

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get("/restaurant",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("lafesti")
        db.collection("RestaurantsProfile").find().toArray((err,data)=>{
            console.log(data)
            res.send(data)
        })
    })
})

app.get("/restaurant/deliveryTime",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("lafesti")
        db.collection("RestaurantsProfile").find().sort({DeliveryTime:1}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

app.get("/restaurant/Cuisines",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("lafesti")
        db.collection("RestaurantsProfile").find().sort({Cuisine:1}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

app.get("/restaurant/Reviews",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("lafesti")
        db.collection("RestaurantsProfile").find().sort({Reviews:-1}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

app.get("/restaurant/Rating",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("lafesti")
        db.collection("RestaurantsProfile").find().sort({Rating:-1}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

app.get("/restaurant/VegOnly",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("lafesti")
        db.collection("RestaurantsProfile").find().filter({Veg:"1"}).toArray((err,data)=>{
            res.send(data)
        })
    })
})

app.post("/insertrest",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("lafesti")
        db.collection('RestaurantsProfile').insertMany(req.body,function(err,data){
            console.log(data)
            res.send(data)
        })
    })
})

app.post("/deleterest/:id",function(req,res){
    MongoClient.connect(url,(err,conn)=>{
        var db=conn.db("lafesti")
        db.collection('RestaurantsProfile').findOneAndDelete({_id: ObjectId(req.params.id)},function(err,data){
            res.send(data)
        })
    })
})

app.patch('/updaterest/:id',(req,res) => {
    MongoClient.connect(url,(err,conn) => {
        var db = conn.db('lafesti');
        db.collection('RestaurantsProfile').updateOne({_id : ObjectId(req.params.id)},{$set:req.body},(err,data) => {
            res.send(data)
            })
        })
    })

app.listen(8898,function(){
    console.log("listening on 8898")
})