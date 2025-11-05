import './ArticleThumbnail.css' 

function ArticleThumb(){
    const article = {
    title: 'Titre de l\'article',
    content: 'Voici le contenu de l\'article.',
    image: 'https://placehold.co/200x200',
    createdAt: new Date(),
    isPublished: false,
    likeCount: 0,
    categoryName: 'React',
};

return (
    <section className="section-card">
        <img src={article.image} alt={article.title} className="img-card"/>
        <h2 className='h2-card'>{article.title}</h2>
        <h3 className='h3-card'>{article.content}</h3>
        <p className='p-card'>Publié le : {article.createdAt.toLocaleDateString()}</p>
        <p className='like-card'>Like : {article.likeCount}</p>
    </section>
);
}
export default ArticleThumb;