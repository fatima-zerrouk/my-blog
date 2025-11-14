// j'importe le jsx
import ArticleThumb from "./ArticleThumbnail.jsx";
import './ArticleList.css' 
import React, {useState} from 'react';

// TEST 2 filtre et mets en min
function filterSearch(articles, query){
    if (!query){
        return articles; 
    }
        return articles.filter((article) => {
            const title = article.title.toLowerCase();
            const content = article.content.toLowerCase();
            const lowerQuery = query.toLowerCase();
            return title.includes(lowerQuery) || content.includes(lowerQuery);
        });
    };
 const articles = [ 
{id : 1,title: 'Titre 1',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',}, 
{id : 2,title: 'Titre 2',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
{id : 3,title: 'Titre 3',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
{id : 4,title: 'Titre 4',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
{id : 5,title: 'Titre 5',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',}, 
{id : 6,title: 'Titre 6',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
{id : 7,title: 'Titre 7',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
{id : 8,title: 'Titre 8',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',}
];
function ArticleList(){
   

const [query, setQuery] = useState("");

const filterResult = filterSearch(articles, query);

const handleSearchChange = (event) => {
    setQuery(event.target.value)
}
console.log(query);


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
        <input type="search" name="search" id="search" onChange={handleSearchChange} placeholder="Rechercher un article" aria-label="Barre de recherche"/>
    </form>
{/* FIN RECHERCHE */} 
    <div className="parent" >
        {filterResult.map((article) => (
            <article key={article.id}>
                < ArticleThumb article = {article} />  
            </article>))}
        </div>   
        </section>
    );
}
export default ArticleList;

// ⬇️⬇️⬇️TEST AVEC LE BOUTON DU FORM QUI MARCHE 

// // j'importe le jsx
// import ArticleThumb from "./ArticleThumbnail.jsx";
// import './ArticleList.css' 
// import React, {useState} from 'react';

// // TEST 2 filtre et mets en min
// function filterSearch(articles, query){
//     if (!query){
//         return articles; 
//     }
//         return articles.filter((articleFilter) => {
//             const title = articleFilter.title.toLowerCase();
//             const content = articleFilter.content.toLowerCase();
//             const lowerQuery = query.toLowerCase();
//             return title.includes(lowerQuery) || content.includes(lowerQuery);
//         });
//     };

// function ArticleList(){
//     const articles = [ 
// {id : 1,title: 'Titre 1',content: 'TEST😩😢😭 Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',}, 
// {id : 2,title: 'Titre 2',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
// {id : 3,title: 'Titre 3',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
// {id : 4,title: 'Titre 4',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
// {id : 5,title: 'Titre 5',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',}, 
// {id : 6,title: 'Titre 6',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
// {id : 7,title: 'Titre 7',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',},
// {id : 8,title: 'Titre 8',content: 'Voici le contenu de l\'article.',image: 'https://placehold.co/200x200',createdAt: new Date(),isPublished: false,likeCount: 0,categoryName: 'React',}
// ];
// // test pour le bouton
// const [searchInput, setSearchInput]= useState("");

// const [query, setQuery] = useState("");

// // const filterResult = filterSearch(articles, query);

// // si le user tape sur le clavier
// const handleSearchChange = (event) => {
//     setSearchInput(event.target.value)
// }

// const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     setQuery(searchInput);
// };
// const filterArticles = filterSearch(articles, query)
// console.log(query);
// return (
// // aria-labelledby="article-list-title" se lie au h2 avec le même id pour que le lecteur d’écran annoncent le contenu du h2
// <section className="article-list" aria-labelledby="article-list-title">
//     <hr className="hr" color="#4d3a44" />
//     <h1 className="title-article">Bienvenue sur mon blog</h1>
//     <hr className="hr" color="#4d3a44" />
//     <h2 className="h2-article" id="article-list-title">Article populaires</h2>
// {/* RECHERCHE */}
//     <form action="" id="form-search" onSubmit={handleSearchSubmit}>
//         <label htmlFor="search">Recherche</label>
//         <input type="search" id="search" onChange={handleSearchChange} placeholder="Rechercher un article"/>
//         <button id="filter" className="search-button" aria-label="Aimer cet article">Recherche</button>
//     </form>
// {/* FIN RECHERCHE */} 
//     <div className="parent" >
//         {filterArticles.map((article) => (
//             <article key={article.id}>
//                 < ArticleThumb article = {article} />  
//             </article>))}
//         </div>   
//         </section>
//     );
// }
// export default ArticleList;