const repl = require("repl");
const db = require("./models");
const User = db.User;

// Utility functions
function asArray(collection) {
  return Array.from(collection).map((record) => record.get({ plain: true }));
}

function asObject(record) {
  return record.get({ plain: true });
}

// Start the REPL environment
const replServer = repl.start({
  prompt: "blogging-platform > ",
});

// Set the models and utility functions in the REPL context
replServer.context.User = User;
replServer.context.asArray = asArray;
replServer.context.asObject = asObject;
