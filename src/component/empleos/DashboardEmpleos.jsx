import React, { useState } from 'react';
import './DashboardEmpleos.css';
import empleos from '../../utils/empleos.js';

const DashboardEmpleos = () => {
    const [selectedArea, setSelectedArea] = useState('Todos');
    const [empleoSelected, setEmpleoSelected] = useState(empleos[0]);
    const [showEmpleos, setShowEmpleos] = useState(true);
    
    // Get unique areas for filter
    const areas = ['Todos', ...new Set(empleos.map(empleo => empleo.area))];
    
    // Filter empleos based on selected area
    const filteredEmpleos = selectedArea === 'Todos' 
        ? empleos 
        : empleos.filter(empleo => empleo.area === selectedArea);

        
    return(
        <div className='contEmpleos'>
            <div className='filtros'>
                <b>Filtros</b>
                <div className='area'>
                    <span>Area:</span>
                    <select 
                        value={selectedArea} 
                        onChange={(e) => setSelectedArea(e.target.value)}
                    >
                        {areas.map(area => (
                            <option key={area} value={area}>{area}</option>
                        ))}
                    </select>
                </div>
            </div>
            
                <div className='contenedor' >
                    
                    <div className={showEmpleos ? 'headerEmpleo visible' : 'headerEmpleo hiddenE'  }>
                    {filteredEmpleos.map((empleo, index) => (
                        <div className={`headerEmpleiId ${empleo.estado === "Inactivo" ? "disabled" : ""}`} key={index} onClick={()=>(setEmpleoSelected(empleo),setShowEmpleos(!showEmpleos))} >
                            <img src="/img/lv.png" alt="" />
                            <div className='empleoInfo'>
                                <span className='title'>{empleo.titulo} ({empleo.estado})</span>
                                <span className='area'>{empleo.area}</span>
                                <span className='modalidad'>{empleo.modalidad}</span>
                            </div>
                            {
                                empleoSelected == empleo?
                                    <span className='icon'><i className="bx bx-chevron-right"></i></span>
                                :
                                    <span className='icon'></span>
                            }
                        </div>
                    ))}
                    </div>
                    
                    <div className='bodyEmpleo'>
                        {!empleoSelected == {} ?
                            <div><span>seleccione empleo</span></div>
                        :
                            <div className='bodyEmpleoInfo'>
                            <i className='bx bx-arrow-back' onClick={()=>setShowEmpleos(!showEmpleos)}></i>
                            <h1 className='titulo'>{empleoSelected.titulo} <span className='direccion'>{empleoSelected.estado}</span></h1>
                            <span className='area'>{empleoSelected.area}</span>
                            <span className='modalidad'>{empleoSelected.modalidad}</span>
                            <span className='direccion'>{empleoSelected.direccion}</span>
                            <span className='acercaTitulo'>Acerca del empleo</span>
                            <p className='parrafo1'>{empleoSelected.descripcion}</p>
                            <span className='acercaTitulo'>Habilidades y Experiencia Requerida</span>
                            <span className='acercaTitulo'>Formación academica</span>
                            <ul>
                                <li>
                                    <span><i className="bx bx-check"></i></span>
                                    <span>{empleoSelected.formacion}</span>
                                </li>
                            </ul>
                            <span className='acercaTitulo'>Experiencia</span>
                            <ul>
                                {empleoSelected.experiencia.map((exp, i) => (
                                    <li key={i}>
                                        <span><i className="bx bx-check"></i></span>
                                        <span>{exp}</span>
                                    </li>
                                ))}
                            </ul>
                            <span className='acercaTitulo'>Conocimientos</span>
                            <ul>
                                {empleoSelected.conocimientos.map((conocimiento, i) => (
                                    <li key={i}>
                                        <span><i className="bx bx-check"></i></span>
                                        <span>{conocimiento}</span>
                                    </li>
                                ))}
                            </ul>
                            <span className='acercaTitulo'>Habilidades</span>
                            <ul>
                                {empleoSelected.habilidades.map((habilidad, i) => (
                                    <li key={i}>
                                        <span><i className="bx bx-check"></i></span>
                                        <span>{habilidad}</span>
                                    </li>
                                ))}
                            </ul>
                            <span className='acercaTitulo'>Responsabilidades del empleo</span>
                            <ul>
                                {empleoSelected.responsabilidades.map((responsabilidad, i) => (
                                    <li key={i}>
                                        <span><i className="bx bx-check"></i></span>
                                        <span>{responsabilidad}</span>
                                    </li>
                                ))}
                            </ul>
                            <a className='btnEmail' href={empleoSelected.correoAplicacion}>Aplicar</a>
                        </div>
                        
                        }
                    </div>
                </div>
            
        </div>
    );
}

export default DashboardEmpleos;