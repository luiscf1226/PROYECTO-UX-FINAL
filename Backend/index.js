const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.listen(3001, () => {
   console.log('running server');
});

const mysql = require('mysql2');

/*
const db = mysql.createConnection({
    user: 'b59556dbc9911d',
    host: 'us-cdbr-east-06.cleardb.net',
    password: '30662ceb',
    database: 'heroku_ae71baf0956b5c0',
 });
*/

const pool = mysql.createPool({
    user: 'b59556dbc9911d',
    host: 'us-cdbr-east-06.cleardb.net',
    password: '30662ceb',
    database: 'heroku_ae71baf0956b5c0',
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


    pool.query(
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

    pool.query(
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