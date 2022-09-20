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
      
            Axios.get('http://localhost:3001/login').then((response) => {
                if(response.data.find(item=>item.Correo==correo)&&response.data.find(item=>item.Correo==correo).Password==password){
                    alert('Bienvenido usuario: '+correo);
                    navigate('/Cines');
                }else{
                    alert('Login Incorrecto')
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