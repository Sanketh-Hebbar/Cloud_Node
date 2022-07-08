const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//<<<<<<< HEAD
  const msg = 'Hello deployment was successfull  \n'
//=======
 // const msg = 'Hello Varun \n'
//>>>>>>> 54e201e7c36d327049dfb624583d92011f3ca1b7
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
