import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ArticleInfo = ({ArticleId,articlesInfo,language}) => {
    const navigate = useNavigate();
    const [articulo, setArticulo] = useState(0);
    const [title, setTitle] = useState('Articles')
    useEffect(() => {
        setArticulo(articlesInfo[language].articles[ArticleId])
        if (articulo === undefined) {
            navigate('/articulos');
        }
    }, [language, ArticleId], articulo)
  return (
    <div className='articleInfo'>
        <Link to={`/articulos`}>{title}/{articulo.title}</Link>
        <br /><br />
        {
            articulo ?(
                <div className='contain'>
                    <div className='image'>
                      <img 
                        className='img' 
                        src={articulo.image} 
                        alt={articulo.title}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
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