import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ArticlePage() {
const { id } = useParams(); // récupère l'id dans l'URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    fetch(`http://localhost:3001/articles/${id}`)
    .then(res => {
        if (!res.ok) throw new Error("Article introuvable");
        return res.json();
      })
      .then(data => {
        setArticle(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement de la page</p>;
  if (error) return <p>Erreur {error}</p>;
  
 const articleDate = article.createdAt 
    ? new Date(article.createdAt) 
    : null;
    
  return (
  <article>
      <img src={article.image} alt={article.title} className="img-card"/>
    <figcaption>
        <h2 className='h2-card'>{article.title}</h2>
        <p className='p-card'>{article.content}</p>
        <p className='p-date'>Publié le :<time dateTime={articleDate.toISOString()}> {articleDate.toLocaleDateString()}</time> </p>
        </figcaption>
  </article>
  );

}
export default ArticlePage