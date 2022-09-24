
import React, { Component,useState, useEffect } from 'react';
import './Bienvenido.css'
import logo from '../images/logo.jpg';
import bienvenidologo from '../images/bienvenido.png';
//import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
function Bienvenido() {
    const navigate= useNavigate();
    var [count, setCount] = useState(0);
    const ingresar=()=>{
        
        navigate('/login');
        
    }
  
    return (
        <div className='bienvenido-principal'>
            <span className='span-unitec-principal'>UNITEC</span>
            <h1 className='header-principal'>Bienvenido/a</h1>
            <img className='img-principal' src={bienvenidologo}></img>
            <h2 className='h2-principal'>
                Todos los cines al<br></br>
                alcance de tu mano
                
             </h2>
            
            <button onClick={()=>ingresar()} className='button-principal-bienvenido' >
                Comenzar 
                <i class="fa-solid fa-arrow-right flecha"></i>
                
            </button>          
            </div>
           
        );
    
}

export default Bienvenido;