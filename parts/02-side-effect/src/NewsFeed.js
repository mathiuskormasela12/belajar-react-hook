/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
/**
 * Request Top Headline from https://newsapi.org/
 * Show loading message while fetching
 * Handle Error 
 * Complete functionality of 'Load More' & 'Refresh' button
 */

const endpoint = "https://newsapi.org/v2/top-headlines?country=id&apiKey=d4eef434bb2848cca69d497ef7eb2b42";


function NewsFeed() {

	const [news, setNews] = useState({
		status: 'ok',
		totalResults: 0,
		articles: []
	});

	const [isLoad, setLoad] = useState(false);
	const [isRefresh, setRefresh] = useState(false);
	const [isError, setError] = useState(false);
	const [page, setPage] = useState(0);

	function showMore() {
		setPage(1);
	}

	useEffect(() => {
		const getData = async () => {
			setLoad(true);
			try {
				const response = await fetch(`${endpoint}&page=${page}`);
				const results = await response.json();
				console.log(results)
				setNews(currentState => ({
					...results,
					totalResults: currentState.totalResults,
					articles: [...currentState.articles, ...results.articles]
				}));
				console.log(news)

				if(results.status !== 'ok') {
					throw new Error('error');
				}
			} catch(err) {
				setError(true);
			}
			setLoad(false);
		}
		getData();
	}, [page, isRefresh])

  return (
    <>
      <h3>Top News Headline </h3>
			{ isLoad && <p> Loading...</p> }
			{ isError && <p> mon maap ada gangguan sis</p> }
      <ol>
				{ news.articles.map((items, index) => (
					 <li key={ index }>
            <a href="/" target="blank">{ items.title }</a>
          </li>
				))}
      </ol>
        <button onClick={ () => setPage(c => c + 1) }>
          Load More
        </button>
      <button>
        Refresh
      </button>
    </>
  );
}

export default NewsFeed;
