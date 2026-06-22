const http = required('http');

const server = http.createServer((request , response)=>{
  response.write('hello server');
  response.end();
});

server.listen(3000);
