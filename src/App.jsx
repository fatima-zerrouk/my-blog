import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import ArticleEditPage from './pages/ArticleEditPage.jsx'
// import './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'
import NewArticlePage from './pages/NewArticlePage.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new/articles' element={<NewArticlePage />} />
        <Route path='/article/:id/edit' element={<ArticleEditPage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );

}
export default App
