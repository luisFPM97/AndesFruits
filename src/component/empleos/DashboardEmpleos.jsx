import React, { useState } from 'react';
import './DashboardEmpleos_NEW.css';
import empleos from '../../utils/empleos.js';

const DashboardEmpleos = () => {
    const [selectedArea, setSelectedArea] = useState('Todos');
    const [empleoSelected, setEmpleoSelected] = useState(null);
    
    // Get unique areas for filter
    const areas = ['Todos', ...new Set(empleos.map(empleo => empleo.area))];
    
    // Filter empleos based on selected area and only show active
    const filteredEmpleos = selectedArea === 'Todos' 
        ? empleos.filter(empleo => empleo.estado === 'Activo')
        : empleos.filter(empleo => empleo.area === selectedArea && empleo.estado === 'Activo');

    const handleCloseModal = () => {
        setEmpleoSelected(null);
    };

    return (
        <div className='empleos-page'>
            {/* Hero Section */}
            <div className='empleos-hero'>
                <div className='empleos-hero-content'>
                    <h1 className='empleos-hero-title'>Construye tu carrera con nosotros</h1>
                    <p className='empleos-hero-subtitle'>Explora nuestras oportunidades laborales y únete a un equipo comprometido con la excelencia</p>
                </div>
            </div>

            {/* Supplier Contact Card */}
            <div className='supplier-card'>
                <div className='supplier-content'>
                    <h2 className='supplier-title'>Contacto de Proveeduría</h2>
                    <div className='supplier-info'>
                        <div className='supplier-detail'>
                            <i className='bx bxs-user-circle'></i>
                            <span><strong>Jefe de Proveeduría:</strong> Nayeli Peñaranda</span>
                        </div>
                        <a href='mailto:proveeduriaandes@gmail.com' className='supplier-link' rel='noopener noreferrer'>
                            <i className='bx bx-envelope'></i>
                            proveeduriaandes@gmail.com
                        </a>
                        <a href='https://wa.me/573207293894' target='_blank' className='supplier-link' rel='noopener noreferrer'>
                            <i className='bx bxl-whatsapp'></i>
                            (+57) 320-729-3894
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='empleos-container'>
                {/* Filters */}
                <div className='empleos-filters'>
                    <h3 className='filters-title'>Filtrar Vacantes</h3>
                    <div className='filter-group'>
                        <label className='filter-label' htmlFor='area-select'>Área:</label>
                        <select 
                            id='area-select'
                            className='filter-select'
                            value={selectedArea} 
                            onChange={(e) => setSelectedArea(e.target.value)}
                        >
                            {areas.map(area => (
                                <option key={area} value={area}>{area}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Jobs Grid */}
                {filteredEmpleos.length > 0 ? (
                    <div className='empleos-grid'>
                        {filteredEmpleos.map((empleo, index) => (
                            <article 
                                className='job-card' 
                                key={index}
                                onClick={() => setEmpleoSelected(empleo)}
                            >
                                <div className='job-card-header'>
                                    <img src='/img/lv.png' alt='AndesFruits' className='job-logo' />
                                    <div className='job-info'>
                                        <h3 className='job-title'>{empleo.titulo}</h3>
                                        <p className='job-company'>AndesFruits</p>
                                    </div>
                                </div>
                                <div className='job-meta'>
                                    <span className='job-badge'>
                                        <i className='bx bx-briefcase'></i>
                                        {empleo.area}
                                    </span>
                                    <span className='job-badge'>
                                        <i className='bx bx-map'></i>
                                        {empleo.modalidad}
                                    </span>
                                    {empleo.direccion && (
                                        <span className='job-badge'>
                                            <i className='bx bx-map-pin'></i>
                                            {empleo.direccion}
                                        </span>
                                    )}
                                </div>
                                <span className={`job-status ${empleo.estado === 'Activo' ? 'active' : 'inactive'}`}>
                                    {empleo.estado}
                                </span>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className='empleos-empty'>
                        <i className='bx bx-briefcase'></i>
                        <p className='empleos-empty-text'>No hay vacantes disponibles en esta área</p>
                    </div>
                )}
            </div>

            {/* Job Detail Modal */}
            {empleoSelected && (
                <div className='job-detail-modal' onClick={handleCloseModal}>
                    <div className='job-detail-content' onClick={(e) => e.stopPropagation()}>
                        <div className='job-detail-header'>
                            <button 
                                className='job-detail-close' 
                                onClick={handleCloseModal}
                                aria-label='Cerrar'
                            >
                                ×
                            </button>
                            <h2 className='job-title'>{empleoSelected.titulo}</h2>
                            <p className='job-company'>AndesFruits</p>
                            <div className='job-meta'>
                                <span className='job-badge'>
                                    <i className='bx bx-briefcase'></i>
                                    {empleoSelected.area}
                                </span>
                                <span className='job-badge'>
                                    <i className='bx bx-map'></i>
                                    {empleoSelected.modalidad}
                                </span>
                                {empleoSelected.direccion && (
                                    <span className='job-badge'>
                                        <i className='bx bx-map-pin'></i>
                                        {empleoSelected.direccion}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className='job-detail-body'>
                            <section className='job-section'>
                                <h3 className='job-section-title'>Acerca del empleo</h3>
                                <p className='job-description'>{empleoSelected.descripcion}</p>
                            </section>

                            {empleoSelected.formacion && (
                                <section className='job-section'>
                                    <h3 className='job-section-title'>Formación Académica</h3>
                                    <ul className='job-list'>
                                        <li className='job-list-item'>
                                            <i className='bx bxs-check-circle'></i>
                                            <span>{empleoSelected.formacion}</span>
                                        </li>
                                    </ul>
                                </section>
                            )}

                            {empleoSelected.experiencia && empleoSelected.experiencia.length > 0 && (
                                <section className='job-section'>
                                    <h3 className='job-section-title'>Experiencia Requerida</h3>
                                    <ul className='job-list'>
                                        {empleoSelected.experiencia.map((exp, i) => (
                                            <li key={i} className='job-list-item'>
                                                <i className='bx bxs-check-circle'></i>
                                                <span>{exp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {empleoSelected.conocimientos && empleoSelected.conocimientos.length > 0 && (
                                <section className='job-section'>
                                    <h3 className='job-section-title'>Conocimientos</h3>
                                    <ul className='job-list'>
                                        {empleoSelected.conocimientos.map((conocimiento, i) => (
                                            <li key={i} className='job-list-item'>
                                                <i className='bx bxs-check-circle'></i>
                                                <span>{conocimiento}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {empleoSelected.habilidades && empleoSelected.habilidades.length > 0 && (
                                <section className='job-section'>
                                    <h3 className='job-section-title'>Habilidades</h3>
                                    <ul className='job-list'>
                                        {empleoSelected.habilidades.map((habilidad, i) => (
                                            <li key={i} className='job-list-item'>
                                                <i className='bx bxs-check-circle'></i>
                                                <span>{habilidad}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {empleoSelected.responsabilidades && empleoSelected.responsabilidades.length > 0 && (
                                <section className='job-section'>
                                    <h3 className='job-section-title'>Responsabilidades</h3>
                                    <ul className='job-list'>
                                        {empleoSelected.responsabilidades.map((responsabilidad, i) => (
                                            <li key={i} className='job-list-item'>
                                                <i className='bx bxs-check-circle'></i>
                                                <span>{responsabilidad}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            <a 
                                className='job-apply-button' 
                                href={empleoSelected.correoAplicacion}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <i className='bx bx-send'></i>
                                Aplicar a esta vacante
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DashboardEmpleos;