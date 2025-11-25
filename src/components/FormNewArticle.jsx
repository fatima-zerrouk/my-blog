import { useState, useEffect} from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
import './FormNewArticle.css';

function FormNewArticle() {
    const [newArticle, setNewArticle] = useState({ title: "", content: "",createdAt:new Date().toISOString(), image: "https://placehold.co/200x200"});
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
                setTimeout(() => navigate("/"), 200 );
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }


    if (isLoading) return <p>Chargement</p>; 
    return (
        
        <section>
          
            <h1>Ajouter un article</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="add-title">Titre</label>
                <input type="text" id="add-title" name="add-title" value={newArticle.title} onChange={(event) =>
                    setNewArticle({ ...newArticle,title: event.target.value})} />

                <label htmlFor="add-content">Contenu</label>
                <textarea id="add-content" name="add-content" value={newArticle.content} onChange={(event) =>
                    setNewArticle({ ...newArticle, content: event.target.value})} />

                {/* <label htmlFor="add-date">Date</label>
                <input type="date" name="add-date" id="add-date" value={newArticle.createdAt} onChange={(event) => 
                    setNewArticle({ ...newArticle,createdAt: event.target.value})}/> 
                <label htmlFor="add-upload">Télécharger une image</label>
                <input type="file" name="add-upload" id="add-upload"/> */}

                <button>Ajouter l'article</button>
            </form>
        </section>
    );

}
export default FormNewArticle