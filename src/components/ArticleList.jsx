// j'importe le jsx
import ArticleThumb from "./ArticleThumbnail.jsx";
import './ArticleList.css' 


function ArticleList(){

    return (
        <section className="article-list">

        <h1 className="title-article">Bienvenue sur mon blog</h1>
        <h2 className="h2-article">Article populaires</h2>

        <div className="parent" >
        < ArticleThumb />
        < ArticleThumb />
        < ArticleThumb />
        < ArticleThumb />
        < ArticleThumb />
        < ArticleThumb />
        < ArticleThumb />
        < ArticleThumb />    
        </div>  
        </section>
    );
}
export default ArticleList;