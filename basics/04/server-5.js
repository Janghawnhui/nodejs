// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");
//http 서버가 있어야 웹 브라우저의 요청을 처리할 수 있음 따라서 http 모듈 사용

const server  = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain");
    // req.url : 요청 경로
    // req.method : 요청 방식

    const { url, method } = req; //자바스크립트 구조분해 할당 
    // 위 문장의 의미:const url = req.url;
    //const method = req.method;
//아래의것이 라우팅 개념
    if (method ==="GET" && url ==="/home") {// === 의미 ==와 같지만 좀더 강함
        res.write("HOME");
        res.end();
    } else if (method==="GET" && url ==="/about") {
        res.end("ABOUT");
    } else {
        res.end("Not FOUND");
    }
}); //서버 만들기 요청

server.listen(3000, () => { 
    console.log("서버가 실행중");
}); //서버 포트 지정
// req : request 요청에 관한 정보
// res : response 응답에 관한 정보