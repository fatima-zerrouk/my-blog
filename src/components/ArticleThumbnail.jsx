import './ArticleThumbnail.css' 
import React, {useState} from 'react';

function ArticleThumb({article}){
// setisLiked fonction pour mettre à jour l'état du composant
    const [isLiked, setisLiked] = useState(false); //booléen isLiked initialisé à false

return (
    <figure className="section-card">
        <img src={article.image} alt={article.title} className="img-card"/>
        <figcaption>
        <h2 className='h2-card'>{article.title}</h2>
        <p className='p-card'>{article.content}</p>
        {/* - toISOString() : format ISO standard, lisible par machines et moteurs
            - toLocaleDateString() : format humain, lisible par les utilisateurs */}
        <p className='p-date'>Publié le :<time dateTime={article.createdAt.toISOString()}> {article.createdAt.toLocaleDateString()}</time> </p>
        <button aria-label='Like cet article'  className='button-like' onClick={() => setisLiked(!isLiked)}> {isLiked ? "❤" :  "♡"}</button>
        </figcaption>
    </figure>
);
}
export default ArticleThumb;