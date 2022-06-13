import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosconfig/axiosinstance";

export default function Movies() {
  const [movies, setmovies] = useState([]);

  const [page, setpage] = useState(1);

  useEffect(() => {
    axiosInstance
      .get(`/movie/popular`)
      .then((res) => {
        console.log(res.data.results);
        setmovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => {
          return (
            <div class="col" key={movie.id}>
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  className="card-img-top"
                  style={{ height: "300px", width: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <Link to={`/movie/${movie.id}`}>Details</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ margin: "80px" }}>
        <button className="btn btn-primary" style={{ margin: "80px" }}>
          Previous
        </button>
        <button className="btn btn-primary" style={{ margin: "80px" }}>
          Next
        </button>
      </div>
    </>
  );
}
