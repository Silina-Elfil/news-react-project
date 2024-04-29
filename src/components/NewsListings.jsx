import React from 'react'
import { useState, useEffect } from 'react';
import NewListing from './NewListing';
import Spinner from './Spinner';

const NewsListings = () => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            const apiUrl = '/api/news';
            try {
                const res = await fetch(apiUrl);
                // console.log(res);
                const data = await res.json();
                // console.log(data);
                //const newsWithIds = data.map((item, index) => ({ ...item, id: index }));
                setNews(data);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);


    return (
        <>
            <section className="bg-gray-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    {loading ?
                        <Spinner loading={loading} /> : (

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-6">
                                {news.map((news, index) => (
                                    <NewListing key={index} news={news} />
                                ))}
                            </div>
                        )}
                </div>
            </section>
        </>
    )
}

export default NewsListings
