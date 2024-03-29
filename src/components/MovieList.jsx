import React from "react";
import Spinner from "./Spinner";
import "./MovieList.css";
import Slider from "./NetflixSlider";
import SingleMovie from "./SingleMovie";

export default function MovieList({
  movies,
  nominations,
  nominateMovie,
  loaded,
  error,
  setName,
  setDate,
  displayToggle,
}) {
  const movieNominated = (movie) => {
    return !!nominations.find((n) => n.imdbID === movie.imdbID);
  };

  const allNominationsSet = () => {
    return nominations.length === 5;
  };

  const onClick = (movie) => {
    return is_disabled(movie) ? null : nominateMovie(movie);
  };
  const is_disabled = (movie) => {
    return movieNominated(movie) || allNominationsSet();
  };

  if (movies && loaded && displayToggle === true) {
    return (
      <div className="app">
        <Slider>
          {movies.map((movie) => (
            <Slider.Item
              movie={movie}
              key={movie.id}
              is_disabled={movieNominated(movie) || allNominationsSet()} // boolean
              setNominate={nominateMovie}
              onClick={() => onClick(movie)}
              setName={setName}
              setDate={setDate}
            >
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }

  if (movies && loaded && displayToggle === false) {
    return (
      <div className="app">
        {movies.map((movie) => (
          <SingleMovie
            movie={movie}
            key={movie.id}
            is_disabled={movieNominated(movie) || allNominationsSet()} // boolean
            setNominate={nominateMovie}
            onClick={() => onClick(movie)}
          >
            item1
          </SingleMovie>
        ))}
      </div>
    );
  }

  if (!loaded) {
    return <Spinner />;
  }

  if (error) {
    return <h3>sorry something went wrong! please try again</h3>;
  }
  return <h3 className={"Movie-Filler"}>Omdb Movies will appear here</h3>;
}
