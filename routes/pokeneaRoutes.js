const express = require("express");
const os = require("os");
const router = express.Router();
const pokeneas = require("../data/pokeneas");

function getRandomPokenea() {
  return pokeneas[Math.floor(Math.random() * pokeneas.length)];
}

// Ruta JSON
router.get("/api/pokenea", (req, res) => {
  const p = getRandomPokenea();
  res.json({
    id: p.id,
    nombre: p.nombre,
    altura: p.altura,
    habilidad: p.habilidad,
    container_id: os.hostname(),
  });
});

// Ruta HTML con imagen y frase
router.get("/pokenea", (req, res) => {
  const p = getRandomPokenea();
  res.send(`
    <html>
      <head>
        <title>${p.nombre} - Pokenea</title>
        <style>
          body { font-family: Arial; text-align: center; background: #fafafa; }
          img { max-width: 250px; border-radius: 12px; box-shadow: 0 0 10px #ccc; }
          p { font-style: italic; color: #555; }
        </style>
      </head>
      <body>
        <h1>${p.nombre}</h1>
        <img src="${p.imagen}" alt="${p.nombre}">
        <p>"${p.frase}"</p>
        <small>Container ID: ${os.hostname()}</small>
      </body>
    </html>
  `);
});

module.exports = router;