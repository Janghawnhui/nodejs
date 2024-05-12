// 논블로킹 I/O   (결과 비교 파일 : 05\results\nonblocking.js)
// 논블로킹 I/O   

const fs = require("fs");

const data = fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
console.log("코드 끝!"); // 파일 읽기 전에 실행
