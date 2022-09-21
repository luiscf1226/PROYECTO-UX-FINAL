import React from "react";
import './NuevaCuenta.css';
import logomain from '../images/logo-main.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import Terminos from "./Terminos";

function NuevaCuenta() {
    var [boolterminos,setTerm]=useState(false);
    var[validarCheck, setCheck] = useState(false);
    var[validarCorreo,setCorreo2]=useState(false);
    var validarCuenta=false;
    const navigate= useNavigate();
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleChange = event => {
      if (event.target.checked) {
        setCheck(true);
        setTerm(true);
        console.log('✅ Checkbox is checked');
        validarCheck=true;
      } else {
        console.log('⛔️ Checkbox is NOT checked');
      }
      
    };
    const bienvenido=()=>{
        Axios.get('http://localhost:3001/Crear-cuenta').then((response) => {
                if(response.data.find(item=>item.Correo==correo)){
                    alert('Correo Ya tiene Cuenta');
                    setCorreo2(false);
                    
                }else{
                  
                    if ((!/[^a-zA-Z]/.test(usernameReg))&&(!/[^a-zA-Z]/.test(apellido))&&passwordReg===password&&password===passwordReg
                    &&correo.includes("@")&&validarCheck==true&&validarCorreo==false&&boolterminos==true){
            
                        validarCuenta=true;
                        Axios.post('http://localhost:3001/register', {
                            Primer_Nombre: usernameReg,
                            Primer_Apellido: apellido,
                            Password: passwordReg,
                            Correo: correo
                            
                        })
                        alert('Cuenta Creada Exitosamente');
                    }else{
                        
                        alert('Error al Crear Cuenta');
                    }
                    if(validarCuenta==true){
                        navigate('/login'); 
                    }

                }

            });
       
       
    }
    const terminos=()=>{
       
        navigate('/terminos');
    }
    const bienvenido2=()=>{
        navigate('/login'); 
    }

    const crearCuenta = () =>{
        if(validarCuenta){
           
        }
    }

    const [usernameReg, setUernameReg] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [passwordReg, setPasswordReg] = useState ('');
    const [password, setConfirmPass] = useState('');


    return (
        
        <div className="principal-frame">
            <span className='span-unitec'>UNITEC<br></br>
            <button onClick={()=>bienvenido2()} className="btn-flecha-crear">
                <i class="fa-solid fa-arrow-left fa-2xl flecha-crear"></i>
            </button>
           
            </span>
           
            <div className="heading-crear">
                <img src={logomain} className='img-crear'></img>
            </div>

            <br />
            <br />

            <div className="cuerpo-c">

                <h4>Crear Cuenta</h4>

                <div>
                    <input type="text" placeholder="  Nombre" className="nombreC" id="nombre"
                   
                    onChange={(e) => {setUernameReg(e.target.value)}}
                    
                    
                    />
                </div>

                <div>
                    <input type="text" placeholder="  Apellido" className="apellidoC" id="apellido"
                    onChange={(e) => {setApellido(e.target.value)}}/>
                </div>

                <div>
                    <input type="email" placeholder="  Correo" className="correoC"  id="correo"
                    onChange={(e) => {setCorreo(e.target.value)}}/>
                </div>

                <div>
                    <input type="password" className="  passC" placeholder="Password" id="password"
                    onChange={(e) => {setPasswordReg(e.target.value)}}/>
                </div>

                <div>
                    <input type="password" className="  repeatPassC" placeholder="Repeat Password" id="rep"
                    onChange={(e) => {setConfirmPass(e.target.value)}}/>
                </div>

            </div>


            

            <div className="permisos">

                <div>
                    <input type="checkbox" className="check1" 
                    value={isSubscribed}
                    onChange={handleChange}
                    id="subscribe"
                    name="subscribe"/>
                </div>
                
                <p onClick={()=> {terminos()}} className="terminos-n">Leo y Acepto los Términos de uso y condiciones</p>
            </div>


            <div className="notificaciones">
                <div>
                    <input type="checkbox" className="check2" value={2}/>
                </div>
                
                <p>Deseo recibir notificaciones en mi correo electronico</p>
            </div>


            <div className="boton-crear">
                <button onClick={()=> {bienvenido(); crearCuenta()}} className="bt-crear"><strong>Crear Cuenta</strong></button>
            </div>
            




        </div>
    );

}

export default NuevaCuenta;