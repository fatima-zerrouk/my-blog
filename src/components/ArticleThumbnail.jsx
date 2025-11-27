import { Link } from "react-router-dom";
import './ArticleThumbnail.css'
import React, { useState } from 'react';

function ArticleThumb({ article }) {
    // setisLiked fonction pour mettre à jour l'état du composant
    const [isLiked, setisLiked] = useState(false); // isLiked initialisé à false

    // conversion de createdAt en objet Date
    // si l'API n'envoie pas de date utilise la date du jour
    const articleDate = article.updatedAt
        ? new Date(article.updatedAt)
        : new Date(article.createdAt);

    return (
        <figure className="section-card">

            <img src={article.image} alt={article.title} className="img-card" />
            <figcaption>
                <Link to={`/article/${article.id}`}>
                    <h2 className='h2-card'>{article.title}</h2>
                    <p className='p-card'>{article.content}</p>
                    {/* - toISOString() : format ISO standard, lisible par machines et moteurs
            - toLocaleDateString() : format humain, lisible par les utilisateurs */}
                </Link>
                {/* <p className='p-date'>Publié le :<time dateTime={articleDate.toISOString()}> {articleDate.toLocaleDateString()}</time> </p> */}

                {(article.createdAt || article.updatedAt) && (
                    <p className='p-date'>
                        {article.updatedAt ? "Mis à jour le :" : "Publié le :"}
                        <time dateTime={articleDate.toISOString()}> {articleDate.toLocaleDateString()}</time>
                    </p>)}
            </figcaption>

            <button aria-label='Like cet article' className='button-like' onClick={() => setisLiked(!isLiked)}> {isLiked ? "❤" : "♡"}</button>
        </figure>
    );
}
export default ArticleThumb;