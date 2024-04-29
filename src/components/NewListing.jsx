import React from 'react'
import { Link } from 'react-router-dom';
import defaultImage from "../assets/images/default-img.png";

const NewListing = ({ news }) => {


    
    let imageUrl = news?.urlToImage ? news.urlToImage : defaultImage;
    let title = news?.title ? news.title : "#Untitled";
    let author = news?.author ? news.author : "No Author";
    let publishedAt = news?.publishedAt ? news.publishedAt : "#No Date";
    let sourceName = news?.source?.name ? news.source.name : "#No Source";
    let id = news?.id ? news.id : sourceName;
    let description = news?.description ? news.description.substring(0, 90) + "..." : "#No Description";


    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto" >
                <img className="w-full" src={imageUrl} alt="image" />
                <div className="px-6 py-4">
                    <div className="font-semibold text-xl mb-2">{title}</div>
                    <p className="text-gray-600 mb-2">{author} / {publishedAt}</p>
                    <p className="text-gray-700 text-base">{description}</p>
                    <p className="italic text-gray-600 mt-2">{sourceName}</p>
                </div>
                <div className="px-6 py-4">
                    <Link
                        to={`/${id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Read More
                    </Link>
                </div>
            </div>

        </>
    )
}

export default NewListing
