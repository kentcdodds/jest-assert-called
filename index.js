const realAdd = require('./real-add')

function add(a, b) {
  // The test passes with this:
  // return realAdd(a, b)
  // or with this:
  return a + b

  // this is because the mock implementation and the actual
  // function do the same thing. But I want to make sure that
  // the mocked function is being called instead. I can make
  // a manual assertion for that, but it's possible that
  // someone could forget to write that assertion even though
  // the mock is established.
}

module.exports = add
