const fs = require('fs').promises;

// 비동기 함수를 명시적으로 사용하여 파일 읽기 작업을 시작합니다.
async function a() {
  try {
    // 비동기적으로 파일을 읽기 위해 Promise를 반환하는 fs.readFile 메서드를 호출합니다.
    const data = await fs.readFile('file.txt', 'utf8');
    
    // 파일 읽기가 완료되면 결과를 출력합니다.
    console.log('File content:', data);
    
  } catch (err) {
    // 에러가 발생하면 즉시 처리하여 콘솔에 에러 메시지를 출력합니다.
    console.error('Error reading the file:', err);
  }
}
a();
