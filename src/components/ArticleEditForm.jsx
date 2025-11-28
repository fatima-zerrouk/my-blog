import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import './FormNewArticle.css';

function ArticleEditForm() {
    const { id } = useParams();
    const [editArticle, setEditArticle] = useState({ title: "", content: "", createdAt: new Date().toISOString(), image: "https://placehold.co/200x200" });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        const articleSend = {
            ...editArticle,
            updatedAt: new Date().toISOString() // Ajout de updatedAt SEULEMENT
        };

        fetch(`http://localhost:3001/articles/${id}`, {
            method: "PUT",
            body: JSON.stringify(articleSend),
            headers: {
                "Content-Type": "application/json",
            },
         })
            .then((res) => {
                if (!res.ok) throw new Error("Imposible de modifier l'article");
                return res.json();
            })
            .then(() => {
                toast.success("Article mis à jour avec succès")
                setTimeout(() => navigate(`/article/${id}`), 0);
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }
    if (isLoading) return <h2 className="err-loading">Chargement de la page...</h2>; 
    if (error) return <h2 className="err-loading">Erreur : {error}</h2>; 
    return (
        <section className="add-section">

            <form className="add-form" onSubmit={handleSubmit}>
                <label htmlFor="add-title">Titre</label>
                <input type="text" id="add-title" name="add-title" required minLength="5" maxLength="50" placeholder="Modifier le titre" value={editArticle.title} onChange={(event) =>
                    setEditArticle({ ...editArticle, title: event.target.value })} />

                <label htmlFor="add-content">Contenu</label>
                <textarea id="add-content" name="add-content" required minLength="5" maxLength="1500" rows="15" cols="50" placeholder="Modifier le contenu" value={editArticle.content} onChange={(event) =>
                    setEditArticle({ ...editArticle, content: event.target.value })} />

                <label htmlFor="add-upload">Modifier l'image</label>
                <input type="file" name="add-upload" id="add-upload" accept="image/*" />

                <button className="add-button">Modifier l'article</button>
            </form>
        </section>
    );

}
export default ArticleEditForm