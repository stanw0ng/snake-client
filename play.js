const { connect } = require('./client'); //a conn object is returned
const { setupInput } = require('./input');

console.log("Connecting ...");
setupInput(connect());