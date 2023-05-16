import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ArticleCardStyled } from '../styles/articles.style'

function ArticleCard({ article }) {
  return (
    <ArticleCardStyled variant="outlined">
      <div className="img-container">
        <img src={article.urlToImage} alt="" />
      </div>
      <div className="details-container">
        <h4>{article.title}</h4>
        <i>{article.author}</i>
        <p>{article.description}</p>
      </div>
    </ArticleCardStyled>
  )
}

export default ArticleCard