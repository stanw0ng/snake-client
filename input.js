const { connect } = require("http2");

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
  }
  
  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === 'q') {
    connection.write("Say: ( ͡° ͜ʖ ͡°)");
  }

  if (key === 'e') {
    connection.write("Say: MOVE IT BUB");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => handleUserInput(key));
  return stdin;
};

module.exports = {
  setupInput
}