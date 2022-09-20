const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.listen(3001, () => {
   console.log('running server');
});

const mysql = require('mysql2');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'filmtrip',
 });

 app.use(
    cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
    })
   );

 app.post('/register', (req, res)=> {
 
        const Primer_Nombre = req.body.Primer_Nombre;
        const Primer_Apellido = req.body.Primer_Apellido;
        const Password = req.body.Password;
        const Correo = req.body.Correo;


    db.execute(
      'INSERT INTO usuarios (Primer_Nombre, Primer_Apellido, Password, Correo) VALUES (?,?,?,?)',
      [Primer_Nombre, Primer_Apellido, Password, Correo],
      (err, result)=> {
      console.log(err);
      console.log(err);
      }
    );
 });


 app.post('/login', (req, res) => {
    
    const correo = req.body.Correo;
    const password = req.body.Password;
    var entrologin=false;
    db.execute(
        "SELECT * FROM usuarios WHERE Correo = ? AND Password = ?",
        [correo, password],
        (err, result)=> {
            if (err) {
                console.log('error fatal');
                res.send({err: err});
            }
     
            if (result.length > 0) {
                entrologin=true;
                console.log(entrologin);
                exports.entrologin=entrologin;
                res.send( result);
                console.log('Entro');
                
                }else{
                    entrologin=false;
                    console.log('No se pudo');
                    {message: "Wrong username/password combination!"};
                }
            }
        
    )
    
        }
 );