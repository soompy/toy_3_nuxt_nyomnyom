const express = require('express');
const http = require('http') ;
const socketIO = require('socket.io');

const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (message) => {
    io.emit('chat message', { text: message, self: false })
  });

  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});

app.use((req, res, next) => {
  // 모든 도메인의 요청을 허용 (실제 배포 환경에서는 제한 필요)
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 허용할 HTTP 메서드 설정
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // 허용할 헤더 설정
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // 브라우저가 쿠키를 전송하도록 허용
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use(cors());

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
