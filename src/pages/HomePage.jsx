import ArticleList from '../components/ArticleList/ArticleList.jsx';
import Title from '../components/Title/Title';
//  import { lazy, Suspense } from 'react';


function HomePage() {
  Title("Accueil");
  // const ArticleList = lazy(() => import('../components/ArticleList/ArticleList.jsx'));

  return (
    <>
    {/* <Suspense fallback={<section>charge</section>}> */}
      < ArticleList />
      {/* </Suspense> */}
    </>
  );

}
export default HomePage