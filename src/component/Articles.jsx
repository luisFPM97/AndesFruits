import React, { useEffect, useState } from 'react'
import articles from "../articles.json"
import Loading from './Loading';

const Articles = ({language}) => {
const [articulos, setArticulos] = useState()
const [loading, setLoading] = useState(true);

useEffect(() => {
    // Simulamos la carga de datos
    setArticulos(articles[language])
    console.log(language)
    console.log(articulos)
    // Temporizador para cambiar el estado de carga después de 3 segundos
    const timer = setTimeout(() => {
        setLoading(false);
    }, 3000); // Espera 3 segundos
    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
}, [language])


  return (
    <div className='articles'>
            {loading ? ( // Muestra "Cargando" si estamos en la fase de carga
                <Loading/>
            ) : (
                articulos ? ( 
                    // Si no estamos en carga, muestra el título del artículo
                    <>  
                        <h1>{articulos.title}</h1>
                    </>
                ) : (
                    <>
                        <h1>No hay artículos disponibles</h1> // Manejo de caso si no hay artículos
                        
                    </>
                )
            )}
    </div>
  )
}

export default Articles