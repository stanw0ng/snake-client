const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: BOY");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500)
  });

  conn.on("data", (data) => {
    console.log('server says: ',data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};