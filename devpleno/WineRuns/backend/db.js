const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite"
  },
  useNullAsDefault: true
});

const initDB = async () => {
  const usersExist = await knex.schema.hasTable("users");
  if (!usersExist) {
    await knex.schema.createTable("users", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("passwd");
      table.string("role");
      table.string("unit");
      table.string("timezone");
      table.boolean("active");
    });
  }
  const runsExist = await knex.schema.hasTable("runs");
  if (!runsExist) {
    await knex.schema.createTable("runs", table => {
      table.increments("id").primary();
      table.integer("user_id");
      table.string("friendly_name");
      table.integer("duration"); // in seconds
      table.timestamp("created"); // utc
      table.integer("distance"); // meters
    });
  }
  const teachersExist = await knex.schema.hasTable("teachers");
  if (!teachersExist) {
    await knex.schema.createTable("teachers", table => {
      table.increments("id").primary();
      table.integer("user_id");
    });
  }
  const totalUsers = await knex("users").select(knex.raw("count(*) as total"));
  if (totalUsers[0].total === 0) {
    await knex
      .insert({
        name: "Admin WineRuns",
        email: "admin@wineruns.com",
        passwd: "@123456",
        role: "admin",
        unit: "metric",
        timezone: "America/Sao_Paulo",
        active: true
      })
      .into("users");
    // await knex
    //   .insert({
    //     name: "Tiago Neves",
    //     email: "tiagoneves.tia@gmail.com",
    //     passwd: "@123456",
    //     role: "teacher",
    //     unit: "metric",
    //     timezone: "America/Sao_Paulo",
    //     active: true
    //   })
    //   .into("users");
    // await knex
    //   .insert({
    //     name: "Mara Jeannie",
    //     email: "marajeannie@gmail.com",
    //     passwd: "@123456",
    //     role: "user",
    //     unit: "metric",
    //     timezone: "America/Sao_Paulo",
    //     active: false
    //   })
    //   .into("users");
  }
};
initDB();

module.exports = knex;
