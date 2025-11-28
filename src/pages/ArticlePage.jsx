import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import './ArticlePage.css';
import Title from "../components/Title/Title";

function ArticlePage() {
  Title("Article")
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/articles/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Erreur article introuvable");
        return res.json();
      })
      .then(data => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);


  // DELETE button
  function deleteArticle() {
    const confirmDelete = window.confirm("Vous-voulez vraiment supprimer cet article ?");
    if (!confirmDelete) return;
    
    setIsLoading(true);
    setError(null);

    fetch(`http://localhost:3001/articles/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Impossible de supprimer l’article");
        }
      })
      .then(() => {
        toast.success("Article supprimé avec succès")
        setTimeout(() => navigate("/"), 200);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }

  if (isLoading) return <h2 className="err-loading">Chargement de la page...</h2>;
  if (error) return <h2 className="err-loading">Erreur : {error}</h2>;

  const articleDate = article.updatedAt
    ? new Date(article.updatedAt)
    : new Date(article.createdAt);

  return (
    <section className="section-page">
      <article className="article-page">
        <figure className="figure-page">
          <img src={article.image} alt={article.title}  className="img-page-article" width="200" height="200" />
          <figcaption className="figcaption-page">
            {(article.createdAt || article.updatedAt) && (
              <p className='p-page-article'>
                {article.updatedAt ? "Mis à jour le :" : "Publié le :"}
                <time dateTime={articleDate.toISOString()}> {articleDate.toLocaleDateString()}</time>
              </p>)}
            <h2 className='h2-page-article'>{article.title}</h2>
            <p className='p-page-article'>{article.content}</p>
          </figcaption>
        </figure>
        <div className="buttons-container">
          <Link to={`/article/${article.id}/edit`}><button className="button-update-article">Modifier l'article</button>
          </Link>
          <button className="button-delete-article" onClick={deleteArticle}>Supprimer l'article</button>
        </div>
      </article>
    </section>
  );

}
export default ArticlePage