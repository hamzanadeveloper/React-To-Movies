import React, { useReducer, useEffect } from "react";

import Movie from "./Movie";
import Header from "./Header";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";
import '../App.css'
import { browserHistory } from "@version/react-router-v3";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=7b6d1c01";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(MOVIE_API_URL).then(jsonResponse => {
            dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.data.Search
            });
        });
    }, []);

    // you can add this to the onClick listener of the Header component
    const refreshPage = () => {
        window.location.reload();
    };

    const search = searchValue => {
        dispatch({
            type: "SEARCH_MOVIES_REQUEST"
        });

        axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=7b6d1c01`).then(
            jsonResponse => {
                if (jsonResponse.data.Response === "True") {
                    dispatch({
                        type: "SEARCH_MOVIES_SUCCESS",
                        payload: jsonResponse.data.Search
                    });
                } else {
                    dispatch({
                        type: "SEARCH_MOVIES_FAILURE",
                        error: jsonResponse.data.Error
                    });
                }
            }
        );
    };

    const { movies, errorMessage, loading } = state;

    const retrievedMovies =
        loading && !errorMessage ? (
            <img className="spinner" src={spinner} alt="Loading spinner" />
        ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
        ) : (
            movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
        );

    return (
        <div className="App">
            <div className="m-container">
                <Header/>
                <header className="sub-header">
                    <Search search={search} />
                    <p className="App-intro">Powered by OMDB</p>
                </header>

                <div className="movies">{retrievedMovies}</div>
            </div>
        </div>
    );
};

export default App;
