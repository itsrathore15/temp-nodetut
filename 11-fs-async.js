const fs=require('fs');

console.log('start');

fs.readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        return;
    }
    else{
    //    console.log(result);
    const first=result;
       fs.readFile('./content/second.txt','utf-8',(err,result)=>{
            if(err){
               return;
            }
            else{
                fs.writeFile('./content/resultasync.txt','welcome to async result file',(err,result)=>{
                    if(err){
                        return;
                    }
                    else{
                        console.log('Done with this task');
                      //  console.log(result);
                    }
                });
            }
       });
    }
});

console.log('starting the next task');


