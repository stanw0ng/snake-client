//http://165.227.47.243:8081/

const { connect } = require('./client'); //a conn object is returned
const { setupInput } = require('./input');

console.log("Connecting ...");
setupInput(connect());