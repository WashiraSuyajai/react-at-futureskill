const server = require('http').createServer();
const io = require('socket.io')(server);

io.on("connection", function(socket) {
    socket.on("emit", function(data) { //step 1. fill argument 'data'
        console.log(data) //step 2. fill data to print
        socket.broadcast.emit("count", { count : data.count }) 
        //step 3. server ทำการ emit ค่า count ส่งไปหา client ที่เหลือ ด้วย Broadcast
    })
});

io.on("connection", function(socket) {
    socket.on("emitChat", function(data) {
        socket.broadcast.emit("message", { ...data });
    })
});


server.listen(8080, function(err) {
    if (err) throw err;
    console.log('Server is listening to port 8080');
});

//ทุกๆการอัพเดท source code ฝั่ง server จะต้องทำการรัน server ใหม่ ไม่เหมือน client ที่รันเองอัตโนมัติ