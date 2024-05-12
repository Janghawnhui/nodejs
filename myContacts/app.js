const express= require("express"); // express 모듈가져와서 express 변수에할당
const app = express();


app.get("/", function(req, res)  {
    res.send("hello, Node!");
});
app.get("/contacts", function(req, res  )  {
    res.send("Contacts Page");
});
app.get("/hello" ,function(req, res) {
    res.send("hello");
});
app.listen(3000, function()  {
    console.log('서버 실행 중');
})

app.post("/contacts", function(req, res) {
    res.send("Create Contacts");
});