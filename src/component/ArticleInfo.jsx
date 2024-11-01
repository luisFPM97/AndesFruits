import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ArticleInfo = ({ArticleId,articlesInfo,language}) => {
    const navigate = useNavigate();
    const [articulo, setArticulo] = useState(0);
    useEffect(() => {
        setArticulo(articlesInfo[language].articles[ArticleId])
        
        console.log(language)
        if (articulo === undefined) {
            navigate('/articulos');
        }
      
    }, [language, ArticleId], articulo)
    console.log(articulo)
  return (
    <div className='articleInfo'>
        {
            articulo ?(
                <div className='contain'>
                    <div className='image'><img className='img' src={articulo.image} alt="" /></div>
                    
                    <h2>{articulo.title}</h2>
                    
                    <hr />
                    <p>{articulo.resume}</p>
                    <hr />
                    <p>{articulo.p1}</p>
                    <p>{articulo.p2}</p>
                    <p>{articulo.p3}</p>
                </div>
            ):(
                <div>x</div>
            )
        }
    </div>
  )
}

export default ArticleInfo