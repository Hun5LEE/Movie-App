import Movie from "../components/Movie";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
  `;

  const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
  `;

  const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    grid-gap: 100px;
    padding: 50px;
    width: 80%;
    padding-top: 70px;
    @media screen and (max-width: 1090px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
  `;

  // GET해온 data의 구조 -> data > data > movies
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        );
        setMovies(data.movies);
        setLoading(false);
      } catch (err) {
        console.log(err);
        alert("Error loading");
      }
    })();
  }, []);

  return (
    <Container>
      {loading ? (
        <>
          <h1>Loading...</h1>
          <Loader>
            <span>Loading...</span>
          </Loader>
        </>
      ) : (
        <Movies>
          {movies?.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </Movies>
      )}
    </Container>
  );
}
