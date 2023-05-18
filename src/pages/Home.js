import Movie from "../components/Movie";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // GET해온 data의 구조 -> data > data > movies
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        );
        console.log(data);
        setMovies(data.movies);
        setLoading(false);
      } catch (err) {
        alert("Error loading");
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>Movies Info</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies?.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
      )}
    </div>
  );
}
