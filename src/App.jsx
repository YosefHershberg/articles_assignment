import { AppStyled } from './styles/app.style'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import useFetchArticles from './hooks/useFetchArticles'
import ArticleList from './components/ArticleList'
import { MutatingDots } from 'react-loader-spinner'
import { Center } from './styles/app.style'

function App() {
  const [articleListState, setArticleListState] = useState([])
  
  const { articleList, isLoading, refetch, error } = useFetchArticles()
  
  useEffect(() => {
    setArticleListState(articleList)
  }, [articleList]);

  useEffect(() => {
    error && console.log(error);
  }, [error]);

  return (
    <AppStyled>
      <div className="btn-container">
        <Button variant="contained" onClick={refetch}>Refresh</Button>
        <Button variant="outlined" onClick={() => setArticleListState([])}>Clear</Button>
      </div>
      {isLoading ?
        <Center>
          <MutatingDots
            height="100"
            width="100"
            color="blue"
            secondaryColor='blue'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Center> :
        <ArticleList articleList={articleListState} />
      }
    </AppStyled>
  )
}

export default App
