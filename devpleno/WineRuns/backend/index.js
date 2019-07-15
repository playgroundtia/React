const app = require("./app");
require("./db");

const port = process.env.PORT || 3001;

app.listen(port, () => {
  const msg = `Servidor rodando na porta ${port}`;
  console.log(msg);
});
