import ArticleList from '../components/ArticleList/ArticleList.jsx';
import Title from '../components/Title/Title';


function HomePage() {
  Title("Accueil");

  return (
    <>
      < ArticleList />
    </>
  );

}
export default HomePage