
PORT=process.env.PORT || 3030;

const caps=require('socket.io')(PORT);



caps.on('connection',(socket)=>{
    // console.log('Connected to caps');
    socket.on('pickup',(payload)=>logger('pickup',payload))
    socket.on('in-transit',(payload)=>logger('in-transit',payload))
    socket.on('delivered',(payload)=>logger('delivered',payload))

    socket.on('events',(payload)=>{

        caps.emit('pickup',payload)
        caps.emit('in-transit',payload)
    })
})


function logger(eventName,payload) {
    console.log('EVENT',{event:eventName,time: new Date().toISOString(),payload});
}