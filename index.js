// index.js

const express = require('express');
const cors = require('cors');
const dbOperaciones = require('./db.operaciones');

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log('listening on port 3000')
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  dbOperaciones
    .createUser(usuario.email,usuario.password, (err, result) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(result);
    });
});


// Ruta para iniciar sesión
app.post('/login', (req, res) => {
  const { correo, pass } = req.body;

  dbOperaciones
    .loginUser(correo, pass, (err, result) => {
      if (err) res.status(500).json({ error: err.message });
      else {
        if (result.length > 0) {
          // El usuario existe y las credenciales son correctas
          res.json(result);
        } else {
          // Las credenciales son incorrectas o el usuario no existe
          res.status(401).json({ error: err.message || 'Credenciales inválidas' });
        }
      }
    })
});















// Ruta para crear un Producto
app.post('/producto', (req, res) => {
  const { codigoDeBarras, nombre, descripcion, precio, cantidadMinima, cantidadMaxima, cantidadActual } = req.body;

  dbOperaciones
    .createProduct(codigoDeBarras, nombre, descripcion, precio, cantidadMinima, cantidadMaxima, cantidadActual, (err, result) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(result);
    })
});


app.put('/producto', (req, res) => {
  const { codigoDeBarras, nombre, descripcion, precio, cantidadMinima, cantidadMaxima, cantidadActual } = req.body;

  dbOperaciones
    .updateProduct(codigoDeBarras, nombre, descripcion, precio, cantidadMinima, cantidadMaxima, cantidadActual, (err, result) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(result);
    })
});


app.delete('/producto/:id', (req, res) => {
  const { id } = req.params ;
  dbOperaciones
    .deleteProduct(id, (err, result) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(result);
    })
});


app.get('/producto', (req, res) => {
  dbOperaciones
    .selectProduct( (err, result) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(result);
    })
});









app.post('/carrito/:correo',(req,res)=>{
  
})

app.post('/carrito/:idProducto/:idUsuario',(req,res)=>{

})

app.get('/carrito/:idUsuario',(req,res)=>{

})
