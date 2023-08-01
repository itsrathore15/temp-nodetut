const os=require('os');

//info about current user
const user=os.userInfo();
//console.log(user);

//method returns sysytem uptime seconds
//console.log(os.uptime());

const currentOS={
    name: os.type(),
    release: os.release()
}

console.log(currentOS);