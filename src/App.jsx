import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
// import './App.css'
import Header from './components/Header.jsx';
import NewArticlePage from './pages/NewArticlePage.jsx';
// import ArticleList from './components/ArticleList.jsx';

function App() {
  return (
    <>
    {/* mettre les routes page à la place des composants mais garder le header et footer
    pour éviter de les mettre dans les pages à chaque fois */}
     <Header />  
     {/* < ArticleList /> */}
     <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/new/articles' element={<NewArticlePage/>}/>
        <Route path='/article/:id' element={<ArticlePage />}/>
        <Route path='*' element={<PageNotFound />}/>
     </Routes>
    </>   
  );

}
export default App
