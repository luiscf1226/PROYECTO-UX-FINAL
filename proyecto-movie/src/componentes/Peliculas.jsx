import React from "react";
import './Peliculas.css';
import logomain from '../images/logo-main.png';
import superquien from '../images/superquien.jpg';
import logocasa from '../images/logo-main.png';
import logoticket from '../images/logo-ticket.png';
import logouser from '../images/logo-user.png';
import tadeo from '../images/tadeomovie.jpg';
import nopmovie from '../images/nopmovie.jpg';
import spidermovie from '../images/spidermovie.png';
import chicamovie from '../images/chciamovie.jpg';
import {useState} from "react";
import Sinopsis from "./Sinopsis";
import { useNavigate } from "react-router-dom";

function Peliculas (){
    const recibogo=()=>{
        navigate('/Recibo'); 
    };
    var duraciones=['82 min','90min','130 min','165 min','125 min'];
    var generos=['Accion','Comedia','Terror','Accion','Suspenso'];
    var ratings=['D','A','D','A','B'];
    var linksmovie=['superquien','tadeo','nopmovie','spidermovie','chicamovie'];
    var moviesarr=[superquien,tadeo,nopmovie,spidermovie,chicamovie];
    var arreglosinop=['Un actor en apuros que parece condenado a llevar la vida de un perdedor, finalmente obtiene un papel principal como un superhéroe llamado Badman. Siente que todo es posible, pero el destino ataca de nuevo.',
    'Después de que Tad desata accidentalmente una maldición que pone en peligro la vida de sus amigos, emprende una búsqueda para revertir la maldición de la momia',
    'Dos hermanos que dirigen un rancho de caballos en California descubren algo maravilloso y siniestro en los cielos.',
    'Spider-Man ahora revelado, nuestro amistoso lanzador de telarañas del vecindario está desenmascarado y ya no puede separar su vida normal como Peter Parker de las altas apuestas de ser un superhéroe.',
    'Abandonada a los seis años, Kya es una joven sensible, inteligente y de una belleza insólita que ha sobrevivido en soledad en las marismas, con la naturaleza como única amiga.']
    var moviesarr2=['Super ¿Quien?','Tadeo Jones 3','¡Nop!','Spider-Man','La Chica Salvaje'];
    var [duracion,setDura]=useState('82 min');
    var [genero,setGen]=useState('Accion');
    var [rating,setRating]=['D'];
    var [imgpeli,setImg]=useState(superquien);
    var [cont,setCont]=useState(0);
    var [imgpeli2,setImg2]=useState('Super ¿Quien?');
    var[sinopsis,setSinop]=useState('Un actor en apuros que parece condenado a llevar la vida de un perdedor, finalmente obtiene un papel principal como un superhéroe llamado Badman. Siente que todo es posible, pero el destino ataca de nuevo.')
    var [cont2,setCont2]=useState(moviesarr.length);
    var [imgLink,setLink]=useState('superquien');
    const recorrerMovie=()=>{
        
        setCont(cont++);
        if(cont==moviesarr.length){
            setCont(cont=0);
        }
        setImg(imgpeli=moviesarr[cont]);
        setImg2(imgpeli2=moviesarr2[cont]);
        setSinop(sinopsis=arreglosinop[cont]);
        setLink(imgLink=linksmovie[cont]);
        setDura(duracion=duraciones[cont]);
        setGen(genero=generos[cont]);
        setRating(rating=ratings[cont]);
    }
    const retornocines=()=>{
        navigate('/Cines'); 
    }
    const moverUser=()=>{
        navigate('/Usuario'); 
    }
    const recorrerMovie2=()=>{
        
        setCont2(cont2--);
        if(cont2==0){
            setCont2(cont2=moviesarr.length-1);
        }
        setImg(imgpeli=moviesarr[cont2]);
        setImg2(imgpeli2=moviesarr2[cont2]);
        setSinop(sinopsis=arreglosinop[cont2]);
        setLink(imgLink=linksmovie[cont2]);
        setDura(duracion=duraciones[cont2]);
        setGen(genero=generos[cont2]);
        setRating(rating=ratings[cont2]);
        
    }
    const navigate= useNavigate();
    const Sinopsis=()=>{
        console.log('prop a pasar: '+imgpeli2)
        navigate('/Sinopsis',{state:{name:imgpeli2,sinop:sinopsis,link:imgLink,generop:genero,duracionp:duracion,ratingp:rating}}); 
    }
    return(
        <div className="peliculas">
            
             <span className='span-unitec-principal-peli'>UNITEC</span>
             <img className="logomain-peli" src={logomain}></img>
             <div className="flecha-peli-div">
                <span onClick={()=>retornocines()}>
                <i className="fa-solid fa-arrow-left fa-2xl btn-flecha-peli"></i>
                </span>
                <span className="peliculas-pelicula"> Peliculas</span>
              
                
             </div>
             <div className="container-img-peli">
                <button onClick={()=>recorrerMovie2()} className="btn-peli-change">
                <i className="fa-solid fa-caret-left slider-peli-icon"></i>
                </button>
                <button onClick={()=>Sinopsis()} className="img-peli-btn">
                <img className="peli-imagen" src={imgpeli}></img>
                </button>
                <button onClick={()=>recorrerMovie()} className="btn-peli-change" ><i className="fa-solid fa-caret-right slider-peli-icon"></i></button>
             </div>
           
             
             <i className="fa-solid fa-right"></i>
             <hr className="linea-peli"></hr>
             <div className="peli-bar">
                <button className="logos-peli-bara">
                <i className="fa-solid fa-house"></i>
                </button>
                <button onClick={()=>recibogo()} className="logos-peli-bara">
                <i className="fa-solid fa-ticket"></i>
                </button>
                <button  onClick={()=>moverUser()} className="logos-peli-bara">
                <i className="fa-solid fa-user"></i>
                </button>
             
             </div>
            
        </div>
    );
}
export default Peliculas;