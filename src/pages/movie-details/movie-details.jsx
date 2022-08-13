import React from "react";
import Details from "../../modules/details/movie-details";
import ShowTime from "../../modules/show-time/show-time";

export default function MovieDetails() {
  return (
    <div id="movies_detail" className="py-5">
      <div className="container">
        <Details />
        <ShowTime />
      </div>
    </div>
  );
}
