// 프로미스를 사용해 피자 주문하기   (결과 비교: 02\results\promise.js)

// let likePizza = false;
const pizza = new Promise(function(resolve, reject) {
    if (0) {
        resolve('피자를 주문합니다');
    } else {
        reject('피자를 주문하지 않습니다.');
    }
});

pizza
.then(function(result) {
    console.log(result);
})
.catch(function(err) {
    console.log(err);
});