import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import './FormNewArticle.css';

function ArticleEditForm() {
    const { id } = useParams(); 
    const [editArticle, setEditArticle] = useState({ title: "", content: "",createdAt: new Date().toISOString(), image: "https://placehold.co/200x200"});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
    if (error){
        toast.error(error);
    }
}, [error]);
    
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
                if (!res.ok) throw new Error ("Erreur serveur");
                return res.json();
            })
            .then(() => {
                 toast.info("Article mis à jour avec succès")
                setTimeout(() => navigate("/"), 200 );
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }


if (isLoading) return <p>Chargement</p>;

    return (
        <section className="add-section">

            <form className="add-form" onSubmit={handleSubmit}>
                <label htmlFor="add-title">Titre</label>
                <input type="text" id="add-title" name="add-title" required minLength="5" placeholder="Modifier le titre" value={editArticle.title} onChange={(event) =>
                    setEditArticle({ ...editArticle,title: event.target.value})} />

                <label htmlFor="add-content">Contenu</label>
                <textarea id="add-content" name="add-content"  required minLength="5" rows="15" cols="50" placeholder="Modifier le contenu" value={editArticle.content} onChange={(event) =>
                    setEditArticle({ ...editArticle, content: event.target.value})} />

                <label htmlFor="add-upload">Modifier l'image</label>
                <input type="file" name="add-upload" id="add-upload" />

                <button className="add-button">Modifier l'article</button>
            </form>
        </section>
    );

}
export default ArticleEditForm