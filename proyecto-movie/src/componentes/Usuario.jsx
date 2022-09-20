import React from "react";
import { useNavigate } from "react-router-dom";
import './Usuario.css';
import logomain from '../images/logo-main.png';
import bguser from '../images/background-user.png';
import puser from '../images/personuser.png';
function Usuario(){
    const navigate= useNavigate();
    const retornocines=()=>{
        navigate('/Cines'); 
    }
    const recibogo=()=>{
        navigate('/Recibo'); 
    }
    return(
        
        <div className="usuario">
            <span className='span-unitec-principal-u'>UNITEC</span>
            <div className="div-logo-u">
             <img className="logomain-u" src={logomain}></img>
            </div>
            <img className="bg-user-u" src={bguser}></img>
            <img className="p-user-img" src={puser}></img>
            <div className="form-user-1">
                <div className="form-user-1">
                    <label className="membresia-u" for="member">Membresía</label>
                    <select className="select-mem-u" name="member" id="membership" form="">
                    <option value="volvo">Tipo de Membresía</option>
                    
                    </select>   
                </div>
                  
            </div>
            <div className="form-user-2">
                <div className="form-user-2">
                    <label className="idioma-u" for="idioma">Idioma</label>
                    <select className="select-idioma-u" name="member" id="idioma" form="">
                    <option value="volvo">Elegir Idioma</option>
                    
                    </select>   
                </div>
                  
            </div>
            <hr></hr>
            <div className="user-bar-u">
                
               <button onClick={()=>retornocines()} className="logos-u-bara">
                <i className="fa-solid fa-house"></i>
                </button>
                <button onClick={()=>recibogo()} className="logos-u-bara">
                <i className="fa-solid fa-ticket"></i>
                </button>
                <button className="logos-u-bara">
                <i className="fa-solid fa-user"></i>
                </button>
             </div> 
            
        </div>
    );
}
export default Usuario;