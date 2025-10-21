const http = require("http");
const express = require("express");
const app = express();
const cors = require('cors')
const sequelize = require("./config/db")
const bodyParser = require("body-parser");
const path = require("path");
const fs = require('fs');
const events = require("events");
const { graphqlHTTP } = require('express-graphql');



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"/")));



/* models */
const User = require("./models/User");
const Product = require("./models/Product");
const News = require("./models/News");
const Tags = require("./models/Tags");
const Cart = require("./models/Cart");

const schema = require("./graphQ/scheama.js");
const resolvers = require("./graphQ/resolvers.js");

/* router */
const webApi = require("./routes/web.js");
const Apis = require("./routes/api.js");

const Authenticate = require("./middleware/auth.js");


app.use(cors());

app.use(async(req,res,next)=>{
    try{
        await sequelize.authenticate()
        console.log("connected")
        sequelize.sync()
    }catch(error){
        console.log(error)
    }
    next()
})

app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true, // Enable the GraphiQL IDE for easy testing
      })
)

app.use('/admin',webApi.router);
app.use('/api',Apis);


app.get('/loadFile', (req,res,next)=>{
    const data1 = fs.writeFileSync('file.txt', 'Hi This is sankar from rajahmundry');
    const data = fs.readFileSync('file.txt', 'utf8');
    return res.send(data);
    // fs.readFileSync('file.txt', (err, data) => {
    //   if (err) {

    //     console.error("Error reading file:", err);
    //     return res.send("err");
    //   }
    //   return res.send(data.toString());
    // });
});

app.get('/eventEmt', (req,res,next)=>{
    let myEvt = events.EventEmitter();
    myEvt.on("open", () => {
        console.log("this is open")
    });
    myEvt.on("ticket selection", () => {
        console.log("this is ticket selection")
    });
    myEvt.on("payments", () => {
        console.log("this is payment page")
    });

    myEvt.emit("open")

    return res.send("event emitter");
});

app.get("/",(req,res,next)=>{

    return res.end("closed")
})



app.get("/users",(req,res)=>{
    res.send("users data")
})

app.listen("5000",()=>{
    console.log("5000 port connected")
})
