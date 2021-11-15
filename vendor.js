const io =require('socket.io-client');

let host='http://localhost:3030';

const capsSocket=io.connect(host);

capsSocket.on('pickup',(payload)=>{
    console.log(`Thank you for delivering ${payload}`);
})

