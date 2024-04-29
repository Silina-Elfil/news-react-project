import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaArrowLeft } from 'react-icons/fa';
import defaultImage from "../assets/images/default-img.png";

const SingleNewsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  let imageUrl = news?.urlToImage ? news.urlToImage : defaultImage;

  useEffect(() => {
    const apiUrl = '/api/news';
    const fetchNews = async () => {
      try {
        const res = await fetch(`${apiUrl}/${id}`);
        const data = await res.json();
        setNews(data);
        console.log("data", data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [])




  console.log(news);

  return (
    loading ? <Spinner /> : (<>
      <section>
        <div className="mx-4 my-4">
          <a
            href="/"
            className="text-gray-500 hover:text-gray-600 flex items-center"
          >
            <FaArrowLeft className='mr-2' />Back to News
          </a>
        </div>
      </section>
      <div className='mx-5'>
        <p className="text-l italic text-black-600 mt-2">{news.sourceName}</p>
        <p className="text-gray-600 mb-2">{news.author} / {news.publishedAt}</p>
        <div className="font-semibold text-xl mb-2">{news.title}</div>
        <img className="" src={imageUrl} alt="Image" />
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{news.description}</p>
          <p className="text-gray-700 text-base">{news.content}</p>
          <div className='mt-4'>
          Read more:
          <a
            href="#"
            className="text-gray-500 hover:text-gray-600 flex items-center underline"
          > {news.url}</a></div>
        </div>
      </div>
    </>)
  )
}

export default SingleNewsPage
