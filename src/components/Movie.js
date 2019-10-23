import React from "react";
import '../App.css'


const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
            <img
                style={{
                    zIndex:2,
                    position: 'absolute',
                }}
                width="200"
                alt={`The movie titled: ${movie.Title}`}
                src={poster}
            />
            <div style={{position: 'relative', left: '50%', zIndex: 3, display: 'inline-block'}}>OVERLAY</div>
        </div>
    );
};


export default Movie;
