import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


function ArticlePage() {
const { id } = useParams(); // récupère l'id dans l'URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const [isLiked, setisLiked] = useState(false); 

    useEffect(() => {
    if (error){
        toast.error(error);
    }
}, [error]);
  
  
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


  // DELETE
  function deleteArticle(){
        setLoading(true);
        setError(null);

    fetch(`http://localhost:3001/articles/${id}`,{
        method: "DELETE",
    }) 
    .then((response) => {
      if (!response.ok) {
        throw new Error("Impossible de supprimer l’article");
      }
    }) 
     .then(() => {
      toast.success("Article supprimé avec succès")
      setTimeout(() => navigate("/"), 200 );
    })
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
  }

  if (loading) return <p>Chargement</p>;
  
//  const articleDate = article.createdAt 
//     ? new Date(article.createdAt) 
//     : null;

 const articleDate = article.updatedAt 
    ? new Date(article.updatedAt) 
    : new Date (article.createdAt);
    
  return (
  <article>
      <img src={article.image} alt={article.title} className="img-card"/>
    <figcaption>
        <h2 className='h2-card'>{article.title}</h2>
        <p className='p-card'>{article.content}</p>
        {/* <p className='p-date'>Publié le :<time dateTime={articleDate.toISOString()}> {articleDate.toLocaleDateString()}</time> </p> */}
         {(article.createdAt || article.updatedAt) && (
        <p className='p-date'>
            {article.updatedAt ? "Mis à jour le :": "Publié le :"}
           <time dateTime={articleDate.toISOString()}> {articleDate.toLocaleDateString()}</time> 
        </p> )}
        {/* <button aria-label='Like cet article'  className='button-like' onClick={() => setisLiked(!isLiked)}> {isLiked ? "❤" :  "♡"}</button> */}
        </figcaption>
        <Link to={`/article/${article.id}/edit`}><button>Modifier l'article</button></Link>
        <button onClick={deleteArticle}>Supprimer l'article</button>
  </article>
  );

}
export default ArticlePage