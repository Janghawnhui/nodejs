// 1초 간격으로 'A -> B -> C -> D -> STOP' 표시하기   (결과 비교: 02\results\callback-2.js)

// 1초 간격으로 'A -> B -> C -> D -> STOP' 표시하기   

function displayLetter() {
    console.log('A');
    setTimeout(function() {
      console.log('B');
      setTimeout(function() {
        console.log('C');
        setTimeout(function() {
          console.log('D');
          setTimeout(function() {
            console.log('stop!');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  console.log('A');
  displayLetter();
  