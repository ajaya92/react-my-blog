import React from 'react';
import ArticlesList from '../components/ArticilesList';
import articles from './article-content';

const ArticleListPage = () => {
    return (
<>
<h1> Article List</h1>
<ArticlesList articles = {articles}/>
</>
    );
}



    

export default ArticleListPage;