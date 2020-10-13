import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './banner.css';


function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        
        }
        fetchData();
    }, []);

    console.log(movie)

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className="Banner"
            style={{
                backgroundSize: "Cover",
                    ,
                backgroundPosition: "center center",
            }}
        >
            <div className= "bannerContents">
                <h1 className= "bannerTitle"> {movie?.name || movie?.title || movie?.original_name }</h1>
                <div className="banner_buttons">
                    <button className="bannerButton">Play</button>
                    <button className="bannerButton">My List</button>
                </div>
                <h1 className="bannerDesc">
                {truncate(movie?.overview, 150)}
                </h1>

            </div>

            <div className="bannerBottom"/>
        </header>
    )
}

export default Banner
