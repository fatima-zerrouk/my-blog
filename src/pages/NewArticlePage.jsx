import FormNewArticle from '../components/FormNewArticle'
import Title from "../components/Title/Title";

function NewArticlePage() {
    Title("Ajouter un article");



    return (
        <>
            <h2 className='form-h2'>Ajouter un article</h2>
            <FormNewArticle />
        </>
    );

}
export default NewArticlePage