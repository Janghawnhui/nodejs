// 콜백 함수를 사용해 비동기 처리하기  (결과 비교 파일 : 05\results\async-3.js)

const fs = require("fs");

fs.readdir("./", function(err, files) {
    if(err) {
        console.err(err);
    }
    console.log(files);
});

setTimeout(function() {
    console.log("Code is done");

},2000);
