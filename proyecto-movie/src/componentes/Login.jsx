import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';
import gmail from '../images/gmail.png';
import facebook from '../images/face.jpg';
import { useNavigate } from "react-router-dom";
import logoprincipal from '../images/logo-main.png';
import Axios from 'axios';
import {useState} from 'react';



function Login(){
    var [checkearLogin,setCheckL]=useState(false);
    var [correo, setCorreo] = useState('');
    var [password, setPassword] = useState ('');

    var [loginStatus, setLoginStatus] = useState("");
   
    var login = () => {
        
        }


   var navigate= useNavigate();
   var crearcuenta=()=>{
        navigate('/Crear-cuenta'); 
    }

    var entrar=()=>{
      
        Axios.post('http://localhost:3001/login', {
            Correo: correo,
            Password: password,
            })
            .then((response) => {
            
            if(!response.data.message){
                setCheckL(checkearLogin=true); 
                
                let s1=String(response.data[0].Correo);
                let s2=String(correo);
                if(s1!=s2){
                    alert('no');
                }
                if(s1===s2){
                    alert('Bienvenido usuario: '+response.data[0].Correo);
                    navigate('/Cines'); 
                }
                 
            }else if(response.data.message){
                alert('NO');
            }
            });
            

    }
   
    return (
        <div className='login'>
            <span className='span-unitec'>UNITEC</span>
            <h1 className='header'>
                <img src={logoprincipal}></img>
            </h1>
            <span className='span-inicio'>Iniciar sesión</span>
            <form>
                <div className="form-login">
                    <input type='email' className='input1' placeholder='Correo' 
                    onChange={(e) => {setCorreo(e.target.value)}}>
                    </input>
                    <input className='input2' placeholder='Contraseña' type='password'
                    onChange={(e) => {setPassword(e.target.value)}}>
                    </input>
                  

                </div>
            </form>
            <span className='span-olvidar'>¿Olvidaste tu contraseña?</span>
            <div className="botones">
                <button  onClick={()=>{entrar(); login()}} className='button1'>Iniciar Sesión</button>
                <button  className='button2' onClick={()=>crearcuenta()}>Crear Cuenta</button>
            </div>
            
            <span className='span-final'>También puedes entrar con</span>
            <div className="opciones-login">
                <img className='img-mail' src={gmail}></img>
                <img className='img-mail' src={facebook}></img>
            </div>
          
            
           
    
        </div>
    );

}

export default Login;