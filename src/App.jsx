// import './App.css'
import Header from './components/Header.jsx';
import ArticleList from './components/ArticleList.jsx';

function App() {
  return (
// <> balise vide parent
    <>
    {/* mettre les routes page à la place des composants mais garder le header et footer
    pour éviter de les mettre dans les pages à chaque fois */}
     <Header />  
     < ArticleList />
    </>   
  );

}
export default App
