// j'importe le jsx
import ArticleThumb from "./ArticleThumbnail.jsx";
import './ArticleList.css'
import React, { useState } from 'react'; //import des hooks nécessaires
import { useEffect } from "react";

// Fonction qui filtre les articles
function filterSearch(articles, query) {
    if (!query) { // si l'utilisateur n'a rien tapé affiche tous les articles
        return articles;
    }
    return articles.filter((article) => { // met tout en minuscule 
        const title = article.title.toLowerCase();
        const content = article.content.toLowerCase();
        const lowerQuery = query.toLowerCase();
        return title.includes(lowerQuery) || content.includes(lowerQuery); //vérifie si le texte recherché est dans le titre ou le contenu
    });
};

function ArticleList() {
    const [articles, setArticles] = useState([]); // tableau des articles récupérés depuis l'API db.json (vide au début)
    const [loading, setLoading] = useState(true); // pour savoir si la page est encore en train de charger
    const [error, setError] = useState(null);     // stock un message d’erreur si le fetch échoue
    const [searchTerm, setQSearchTerm] = useState(""); // texte tapé dans la barre de recherche

    // useEffect s'exécute au chargement du composant et va récupérer les articles
    useEffect(() => {
        fetch('http://localhost:3001/articles')//requête fetch pour récupérer les données
            .then(reponse => reponse.json()) // la promesse est convertie en json
            .then(data => {
                setArticles(data);// stocke les données dans setArticles
                setLoading(false);// chargement terminé
            })
            .catch(err => {
                setError(err.message); // stocke l’erreur
                setLoading(false); // chargement terminé
            });
    }, []); // [] = s'exécute une seule fois au montage du composanty

    if (loading) return <p>Chargement de la page </p>; // si c'est encore en train de charger affiche le message
    if (error) return <p>Erreur : {error}</p>; // si y a une erreur affiche l’erreur

    const filterResult = filterSearch(articles, searchTerm); //filtre les articles 

    const handleSearchChange = (event) => { // Fonction appelée à chaque modif de la recherche
        setQSearchTerm(event.target.value) //met à jour le state setQSearchTerm
    }
    console.log(searchTerm);

    return (
        // aria-labelledby="article-list-title" se lie au h2 avec le même id pour que le lecteur d’écran annoncent le contenu du h2
        <section className="article-list" aria-labelledby="article-list-title">
            <hr className="hr" color="#4d3a44" />
            <h1 className="title-article">Bienvenue sur mon blog</h1>
            <hr className="hr" color="#4d3a44" />
            <h2 className="h2-article" id="article-list-title">Article populaires</h2>
            {/* RECHERCHE */}
            <form id="form-search" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Recherche</label>
                <input type="search" name="search" id="search" onChange={handleSearchChange} placeholder="Rechercher un article" aria-label="Barre de recherche" />
            </form>
            {/* FIN RECHERCHE */}
            <div className="parent" >
                {filterResult.map((article) => ( // parcourt les articles filtrés et affiche un composant ArticleThumb pour chacun
                    <article key={article.id}>
                        < ArticleThumb article={article} />
                    </article>))}
            </div>
        </section>
    );
}
export default ArticleList;