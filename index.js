const express = require("express");
const app = express();
const pokeneaRoutes = require("./routes/pokeneaRoutes");
const PORT = 80;

app.use("/", pokeneaRoutes);

app.listen(PORT, () => {
  console.log(`Pokenea app corriendo en el puerto ${PORT}`);
});