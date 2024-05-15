import React from 'react';
import { useGetCryptoNewsQuery } from '../services/newsApi.js';

const News = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoNews, error, isFetching } = useGetCryptoNewsQuery(count);

  console.log("Crypto News Data:", cryptoNews);
  console.log("Error:", error);
  console.log("Is Fetching:", isFetching);

  return (
    <div>
      {cryptoNews && (
        <ul>
          {cryptoNews.items.map((news, index) => (
            <li key={index}>
              <h2>{news.title}</h2>
              <p>{news.snippet}</p>
              <p>Publisher: {news.publisher}</p>
              <p>Timestamp: {new Date(parseInt(news.timestamp)).toLocaleString()}</p>
              <a href={news.newsUrl} target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
          ))}
        </ul>
      )}
      {error && <p>Error: {error.message}</p>}
      {isFetching && <p>Loading...</p>}
    </div>
  );
}

export default News;
