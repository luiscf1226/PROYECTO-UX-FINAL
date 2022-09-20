import React from "react";
import './Sinopsis.css';
import logomain from '../images/logo-main.png';
import sin1 from '../images/sinopsis1.png';
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import {useState,props} from "react";
import superquien from '../images/superquien.jpg';
import tadeo from '../images/tadeomovie.jpg';
import nopmovie from '../images/nopmovie.jpg';
import spidermovie from '../images/spidermovie.png';
import chicamovie from '../images/chciamovie.jpg';
import cineex from '../images/pelis.jpg';
function Sinopsis (){
    const moverUser=()=>{
        navigate('/Usuario'); 
    }
    const navigate= useNavigate();
    const retornopeli=()=>{
        navigate('/Peliculas'); 
    }
    const location = useLocation();
    
    const {state}=useLocation();
    var nombreback=state.name;
    var sinopmain=state.sinop;
    var linkmg="'"+state.link+"'";
    var genero=state.generop;
    var duracion=state.duracionp;
    var rating=state.ratingp;
    console.log(linkmg);
    const recibogo=()=>{
        navigate('/Recibo'); 
    }
    return (
        <div className="sinopsis">
            <span className='span-unitec-principal-sinop'>UNITEC</span>
            <button onClick={()=>retornopeli()} className="btn-flecha-s">
                <i className="fa-solid fa-arrow-left fa-2xl btn-flecha-sinop"></i>
            </button>
            <div className="main-info-sinop">
                <img className="img-info-sinop" src={cineex}></img>	
                <div className="div-info-sinopsis">
                    <h3 className="sinopsis-peli-title">{nombreback}</h3>
                    <div className="mega-div-info-sinop">
                        <div className="div-sinop-peli-info">
                            <p className="info-sinop-nomain">{duracion}</p>
                        </div>
                        <div className="div-sinop-peli-info">
                            <p className="info-sinop-nomain">{rating}</p>
                        </div>
                        <div className="div-sinop-peli-info">
                            <p className="info-sinop-nomain">{genero}</p>
                        </div>
                    </div>
                    
                    <p className="sinopsis-peli-info">{sinopmain}
                    </p>
                </div>
            </div>
            <span className="sinopsis-hoy">Hoy</span>
            <div className="div-hoy-s">
                <div className="hoy-cuadro-s">
                    <p className="info-cuadro-s">15:50<br></br>2D<br></br>Doblada</p>
                </div>
                <div className="hoy-cuadro-s">
                <p className="info-cuadro-s">16:00<br></br>2D<br></br>Sub</p>
                </div>
                <div className="hoy-cuadro-s">
                <p className="info-cuadro-s">18:30<br></br>2D<br></br>Doblada</p>
                </div>
                <div className="hoy-cuadro-s">
                <p className="info-cuadro-s">20:00<br></br>2D<br></br>Sub</p>
                </div>
            </div>
            <span className="sinopsis-man">Mañana</span>
            <div className="div-man-s">
                <div className="man-cuadro-s">
                <p className="info-cuadro-s">15:50<br></br>2D<br></br>Doblada</p>
                </div>
                <div className="man-cuadro-s">
                <p className="info-cuadro-s">16:00<br></br>2D<br></br>Sub</p>
                </div>
                <div className="man-cuadro-s">
                <p className="info-cuadro-s">18:30<br></br>2D<br></br>Doblada</p>
                </div>
                <div className="man-cuadro-s">
                <p className="info-cuadro-s">20:00<br></br>2D<br></br>Sub</p>
                </div>
            </div>
            <hr className="linea-div-s"></hr>
            <div className="peli-bar-s">
               <button className="logos-peli-bara">
                <i className="fa-solid fa-house"></i>
                </button>
                <button onClick={()=>recibogo()} className="logos-peli-bara">
                <i className="fa-solid fa-ticket"></i>
                </button>
                <button onClick={()=>moverUser()} className="logos-peli-bara">
                <i className="fa-solid fa-user"></i>
                </button>
             </div>  
        </div>
    );

}
export default Sinopsis;