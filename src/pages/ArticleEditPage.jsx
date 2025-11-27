import ArticleEditForm from "../components/ArticleEditForm";
import Title from "../components/Title/Title";

function ArticleEditPage() {
  Title("Modifier un article");

  return (
    <>
      <h2 className='form-h2'>Modifier l'article</h2>
      <ArticleEditForm />
    </>
  );



}

export default ArticleEditPage
