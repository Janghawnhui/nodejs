const order = function (coffee, callback) {
    console.log(`${coffee} 주문 접수`);
    setTimeout(function() {
      callback(coffee);
    }, 3000);
  };
  
  const display = function (result) {
    console.log(`${result} 완료!`);
  };
  
  order('아메리카노', display);
// display(coffee);