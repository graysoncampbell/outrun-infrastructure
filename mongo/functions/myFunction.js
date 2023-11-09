exports = async function hello(...args) {
    // Write your function logic here! You can...
    // Import dependencies
    const assert = require("assert")
    assert(typeof args[0] === "string")
    // Use ES6+ syntax
    const sayHello = (name = "world") => {
      console.log(`Hello, ${name}.`)
    }
    // Return values back to clients or other functions
    return sayHello(args[0])
  }