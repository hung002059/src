import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../contexts/loading.context";
import { useAsync } from "../../hooks/useAsync";
import { fetchMovieListApi } from "../../services/movie";

export default function MovieList() {
  const navigate = useNavigate();

  const { state: movieList = [] } = useAsync({
    dependencies: [],
    service: () => fetchMovieListApi(),
  });

  const renderHotMovies = () => {
    return movieList?.map((ele) => {
      if (ele.hot) {
        return (
          <div
            className="card_overlay col-xs-12 col-md-6 col-lg-4 col-xl-4"
            key={ele.maPhim}
          >
            <div className="card">
              <div className="card-header p-0">
                <img
                  className="card_img img-fluid w-100"
                  src={ele.hinhAnh}
                  alt="movie"
                />
                <div className="card-hover">
                  <button
                    onClick={() => navigate(`/movie/${ele.maPhim}`)}
                    className="btn"
                  >
                    Xem Chi tiết
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title d-flex justify-content-center">
                  {ele.tenPhim}
                </h4>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const renderPhimDangChieu = () => {
    return movieList?.map((ele) => {
      if (ele.dangChieu) {
        return (
          <div
            className="card_overlay col-xs-12 col-md-6 col-lg-4 col-xl-4"
            key={ele.maPhim}
          >
            <div className="card">
              <div className="card-header p-0">
                <img
                  className="card_img img-fluid w-100"
                  src={ele.hinhAnh}
                  alt="movie"
                />
                <div className="card-hover">
                  <button
                    onClick={() => navigate(`/movie/${ele.maPhim}`)}
                    className="btn"
                  >
                    Xem Chi tiết
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title d-flex justify-content-center">
                  {ele.tenPhim}
                </h4>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const renderAllMovies = () => {
    return movieList?.map((ele) => {
      if (ele.sapChieu) {
        return (
          <div
            className="card_overlay col-xs-12 col-md-6 col-lg-4 col-xl-4"
            key={ele.maPhim}
          >
            <div className="card">
              <div className="card-header p-0">
                <img
                  className="card_img img-fluid w-100"
                  src={ele.hinhAnh}
                  alt="movie"
                />
                <div className="card-hover">
                  <button
                    onClick={() => navigate(`/movie/${ele.maPhim}`)}
                    className="btn"
                  >
                    Xem Chi tiết
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title d-flex justify-content-center">
                  {ele.tenPhim}
                </h4>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <>
      {/* title */}
      <div className="title bg-dark">
        <ul className="nav nav-pills justify-content-center" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="pill" href="#phimHot">
              Phim Hot
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#phimDangChieu">
              Phim đang chiếu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#movies">
              Sắp khởi chiếu
            </a>
          </li>
        </ul>
      </div>

      {/* search */}
      <div className="search row justify-content-center">
        <div className="search_conten col-8 py-3">
          <div className="search">
            <form className="form-inline row justify-content-center">
              <input
                className="form-control mr-2 col-7"
                type="text"
                placeholder="Tìm kiếm phim"
              />
              <button className="btn btn-success col-1" type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* list movie */}
      <div className="movies tab-content pt-4">
        <div id="phimHot" className="container tab-pane active">
          <div className="row">{renderHotMovies()}</div>
        </div>
        <div id="phimDangChieu" className="container tab-pane fade">
          <div className="row">{renderPhimDangChieu()}</div>
        </div>
        <div id="moviesAll" className="container tab-pane fade">
          <div className="row">{renderAllMovies()}</div>
        </div>
      </div>
    </>
  );
}
