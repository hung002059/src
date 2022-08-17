import React from "react";
import Carousel from "../../modules/Carousel/carousel";
import MovieList from "../../modules/movie-list/movie-list";

export default function Home() {
  return (
    <div id="HomePage">
      <div id="carousel" className="my-4">
        <Carousel />
      </div>
      <div id="listMovies" className="my-4">
        <MovieList />
      </div>
    </div>
  );
}
