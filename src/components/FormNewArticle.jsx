import { useState} from "react";
import { useNavigate } from "react-router-dom";

function FormNewArticle() {
    const [newArticle, setNewArticle] = useState({ title: "", content: "",createdAt: new Date().toISOString(), image: "https://placehold.co/200x200"});
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
                if (!res.ok) throw new Error("Erreur serveur");
                return res.json();
            })
            .then((data) => {
                navigate("/"); // redirection
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }
if (isLoading) return <p>Chargement...</p>; 
if (error) return <p>Erreur : {error}</p>; 
    return (
        <section>
            <h1>hello</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="add-title">Titre</label>
                <input type="text" id="add-title" name="add-title" value={newArticle.title} onChange={(event) =>
                    setNewArticle({ ...newArticle,title: event.target.value})} />

                <label htmlFor="add-content">Contenu</label>
                <textarea id="add-content" name="add-content" value={newArticle.content} onChange={(event) =>
                    setNewArticle({ ...newArticle, content: event.target.value})} />
                <button>Ajouter l'article</button>
            </form>
        </section>
    );

}
export default FormNewArticle