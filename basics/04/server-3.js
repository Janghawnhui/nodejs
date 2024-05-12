// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)

const http = require("http");

const server  = http.createServer((req, res) => {
console.log(req.method);

    res.setHeader("Content-type", "text/plain");
    res.write("Hello Node");
    res.end();
}); //서버 만들기 요청

server.listen(3000, () => { 
    console.log("서버가 실행중");
}); //서버 포트 지정

//라우팅: 클라이언트에서 들어오는 요청에 따라 그에 맞는 함수를 실행하는 것 GET, POST,PUT, DELETE 같은 요청 메서드가 있음.