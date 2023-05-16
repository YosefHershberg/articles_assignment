import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { queries, zipperMerge, getRandomNumbers } from '../utils/utils';
import { useIsOnline } from '../hooks/useIsOnline'

const API_KEY = "db4ca9ec82ca4815ae6598f27e6fe0d0"

function useFetchArticles() {
    const [articleList, setArticleList] = useState()
    const [isLoading, setIsLoading] = useState()
    const [error, setError] = useState()
    const [triger, setTrigger] = useState(false)
    
    const { isOnline } = useIsOnline()
    
    const refetch = () => setTrigger(prev => !prev)

    const fetchArticlesFromAPI = async () => {
        try {
            setIsLoading(true)
            const [number1, number2] = getRandomNumbers();
            const res1 = await fetchArticlesByQuery(queries[number1])
            const res2 = await fetchArticlesByQuery(queries[number2])
            setArticleList(zipperMerge(res1, res2).slice(0, 100))
            console.log(queries[number1], queries[number2]);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchArticlesByQuery = async (query) => {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2023-04-15&sortBy=publishedAt&apiKey=${API_KEY}`)
        const fromatedForLS = { articles: res.data.articles, query }
        const storedData = localStorage.getItem('articals');
        if (storedData !== null) {
            const parsedData = JSON.parse(storedData);
            if (!parsedData.some(obj => obj.query === query)) {
                localStorage.setItem('articals', JSON.stringify([...parsedData, fromatedForLS]))
            }
        } else {
            localStorage.setItem('articals', JSON.stringify([fromatedForLS]))
        }
        return res.data.articles
    }

    const fetchArticalsFromLS = () => {
        const storedData = localStorage.getItem('articals');
        if (storedData !== null) {
            const parsedData = JSON.parse(storedData);
            const randNum1 = Math.floor(Math.random() * parsedData.length)
            const randNum2 = Math.floor(Math.random() * parsedData.length)
            setArticleList(zipperMerge(parsedData[randNum1].articles, parsedData[randNum2].articles).slice(0, 100))
            // console.log(parsedDa ta[randNum1].query, parsedData[randNum2].query);
        } else {
            throw new Error('You have no connection to the network and no articels in your local storage')
        }
    }

    useEffect(() => {
        if (isOnline) {
            fetchArticlesFromAPI()
        } else {
            fetchArticalsFromLS()
        }
    }, [triger]);


    return { articleList, isLoading, refetch, error }
}

export default useFetchArticles