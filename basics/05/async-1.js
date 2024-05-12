// 자바스크립트의 비동기 처리  (결과 비교 파일 : 05\results\async-1.js)
console.log("첫번째작업");
setTimeout(function() {
    console.log("두번째작업");
},3000);
console.log("세번째작업");
