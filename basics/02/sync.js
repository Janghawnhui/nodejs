// 순서대로 실행하기  (결과 비교: 02\results\sync.js)
function displayA() {
    console.log("A");
}
function displayB() {
    setTimeout(() => {
        console.log("B");
    }, 2000);
}
function displayC() {
    console.log("C");
}
displayA();
displayB();
displayC();
