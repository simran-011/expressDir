const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
})

// app.use((req,res) => {
//     console.log("request received");
    //res.send("your request has been received");
    // res.send({
    //     name: "apple",
    //     color: "red",
    // })
    // let code = "<h1>hello everyone</h1><h2>bonjour cherie</h2>"

    // res.send(code);
    
        
//})

app.get("/",(req,res)=> {
    res.send("your response has been received on the root path.");
});

// app.get("/help",(req,res)=> {
//     res.send("I'm there to help you");
// });

// app.get("/search",(req,res)=> {
//     res.send("Serach here!!");
// });

// app.get("*",(req,res)=> {
//     res.send("this route is no available");
// })

app.get("/:username/:id",(req,res)=> {
     let {username,id} = req.params;
     let htmlStr = `<h1>your request has been received at @${username}</h1>`;
     res.send(htmlStr);
});


app.get("/search",(req,res)=> {
    let {q} = req.query;
    if(!q) {
        res.send("nothing has been searched");
    }
    res.send(`<h1>you have serached for @${q}</h1>`);
});