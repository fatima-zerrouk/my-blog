import FormNewArticle from '../components/FormNewArticle'
import Title from "../components/Title/Title";

function NewArticlePage() {
    Title("Ajouter un article");



    return (
        <section className='new-article'>
            <h2 className='form-h2'>Ajouter un article</h2>
            <FormNewArticle />
        </section>
    );

}
export default NewArticlePage