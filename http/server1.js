const http = require('http')

http.createServer((req, res) => {

    // res.writeHead : 응답에 대한 정보를 기록
    // 한글 표시를 위해 charset=utf-8
    // 이 정보가 기록되는 부분을 헤더라고 부름
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })  

    res.write('<h1>Hello Node!</h1>');

    // res.end
    res.end('<p>Hello Server!</p>');
})
.listen(8080, () => {   // 서버 연결
    console.log("8080포트에서 서버가 대기중 입니다.")
})