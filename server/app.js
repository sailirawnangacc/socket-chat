const express = require("express");

const app = express();

const server = app.listen(3001, function() {
  console.log("server running on port 3001");
});

const io = require("socket.io")(server);

io.on("connection", function(socket) {
  console.log(socket.id);
  socket.on("join", roomName => {
    console.log("roomName", roomName);
    socket.join(roomName);
  }),
    socket.on("SEND_MESSAGE", function(data) {
      console.log("Inside server Side", data);
      if (data.user == "a") {
        io.in("chatroom1").emit("MESSAGE", data);
      }
      if (data.user == "b") {
        io.in("chatroom1").emit("MESSAGE", data);
      }
      if (data.user == "c") {
        io.in("chatroom2").emit("MESSAGE", data);
      }
      if (data.user == "d") {
        io.in("chatroom2").emit("MESSAGE", data);
      }
      if (data.user == "e") {
        io.emit("MESSAGE", data);
      }
    });
});
