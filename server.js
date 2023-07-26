const http = require('http');

const sever = http.createServer((req,res) =>{
    console.log('run request ...');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello World</h3>');
    res.write('<h2> from Eric & Quoc Bao</h2>');
    res.end();
})
Server.listen(3000,'localhost',()=>{
    console.log('Node.JS server is running on prot: 3000');
})