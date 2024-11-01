import React from 'react'
import { useNavigate } from 'react-router-dom'

const ArticleId = ({article,setArticleId,key}) => {
    const navigate = useNavigate();

    function gotoart (name){
        setArticleId(article.id)
        navigate(`/articulo/${name}`)
    }
  return (
    <div className='articleCard' onClick={()=> gotoart(article.title)}>
        <img className='cardImage' src={article.image} alt="" />
        <div className='cardTitle'>
            <h2>{article.title}</h2>
        </div>
    </div>
  )
}

export default ArticleId