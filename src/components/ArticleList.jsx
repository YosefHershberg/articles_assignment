import React from 'react'
import ArticleCard from './ArticleCard'
import { ArticleListStyled } from '../styles/articles.style'

function ArticleList({ articleList }) {

  return (
    <ArticleListStyled>
      {articleList?.map((article, index)=> (
        <ArticleCard key={index} article={article}/>
      ))}
    </ArticleListStyled>
  )
}

export default ArticleList