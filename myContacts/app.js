const express= require("express"); // express 모듈가져와서 express 변수에할당
const path = require("path");
const app = express();
const port =3000;

app.get("/", function(req, res) {
    res.status(200); //있어도 되고 없어도 되고
    res.send("Hello Node");
    //res.json({ message: "Hello Node!" }); 코드 그대로 출력
});

//모든 연락처 가져오기
app.get("/contacts", function(req, res) {
    //res.status(200).send("Contacts Page");
    res.sendFile(__dirname + "/assets/contacts.html");
});

//새 연락처 추가하기
app.post("/contacts", function(req, res) {
    res.status(201).send("Create Contacts");
});

app.get("/contacts/:id", function(req, res) {
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

app.put("/contacts/:id", function(req, res) {
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

app.delete("/contacts/:id", function(req, res) {
    res.send(`View Contact for ID: ${req.params.id}`);
});

app.listen(port, function() {
    console.log(`${port}번 포트에서 서버 실행중`);
});