const dbLogger = require("./db-logger");

exports.create = ({ message }) =>
  dbLogger("product").withSchema("nodejs").insert({ message });
