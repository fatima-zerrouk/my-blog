import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './FormNewArticle.css';

function FormNewArticle() {
    const [newArticle, setNewArticle] = useState({ title: "", content: "", createdAt: new Date().toISOString(), image: "https://placehold.co/200x200" });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        fetch("http://localhost:3001/articles", {
            method: "POST",
            body: JSON.stringify(newArticle),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Erreur serveur JSON");
                return res.json();
            })
            .then(() => {
                toast.success("Article ajouté")
                setTimeout(() => navigate("/"), 200);
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
                <input type="text" id="add-title" name="add-title" required minLength="5" maxLength="50" placeholder="Ajouter un titre" value={newArticle.title} onChange={(event) =>
                    setNewArticle({ ...newArticle, title: event.target.value })} />

                <label htmlFor="add-content">Contenu</label>
                <textarea id="add-content" name="add-content" required minLength="5" maxLength="1500" rows="15" cols="50" placeholder="Ajouter le contenu" value={newArticle.content} onChange={(event) =>
                    setNewArticle({ ...newArticle, content: event.target.value })} />

                <label htmlFor="add-upload">Télécharger une image</label>
                <input type="file" name="add-upload" id="add-upload" accept="image/*" />

                <button className="add-button" type="submit">Ajouter l'article</button>
                <button className="add-button-null" onClick={()=> navigate("/")}>Annuler</button>
            </form>
        </section>
    );

}
export default FormNewArticle