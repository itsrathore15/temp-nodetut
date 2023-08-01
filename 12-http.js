 const http=require('http');

 const server=http.createServer((req,res)=>{
 //   console.log(req);
 if(req.url==='/'){
    res.end('Welcome to our homepage');
 }
 //   res.write('Welcome to our homepage');
 //   res.end();
  else if(req.url==='/about'){
     res.end('Here is our about page');
   }
   else{
     res.end('cant find the page');
   }
 });

 server.listen(5000); 