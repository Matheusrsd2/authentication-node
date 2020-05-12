const dbLogger = require("./db-logger");

const SCHEMAS = [{ name: "nodejs", tables: ["product"] }];

const TABLE_STRUCTURE = (table) => {
  table.increments("id");
  table.text("message");
  table.timestamp("created_at").defaultTo(dbLogger.fn.now());
};

const createSchema = (schema) =>
  dbLogger.schema.createSchemaIfNotExists(schema.name);

const createTable = async (schema, table) => {
  const hasTable = await dbLogger.schema.withSchema(schema).hasTable(table);

  if (hasTable) {
    return;
  }

  dbLogger.schema.withSchema(schema).createTable(table, TABLE_STRUCTURE);
};

const init = async () => {
  await Promise.all(SCHEMAS.map(createSchema));

  await Promise.all(
    SCHEMAS.map((schema) =>
      Promise.all(schema.tables.map((table) => createTable(schema.name, table)))
    )
  );
};

module.exports = init;
