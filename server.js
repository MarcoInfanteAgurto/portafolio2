const express = require('express');
const app = express();
const Port = 3000;

app.use(express.static("Public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "public/inicio.html");
});

app.listen(Port, () => {
    console.log(`SERVER FUNCIONANDO http://18.234.69.196:${Port}`);
});