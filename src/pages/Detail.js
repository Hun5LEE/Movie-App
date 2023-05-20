import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
      url(${details?.background_image});
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    color: white;
  `;

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      setDetails(data.movie);
      setLoading(false);
    })();
  }, []);

  return (
    <Wrapper>
      <h3
        style={{ textAlign: "center", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        👉🏻 Home 👈🏻
      </h3>
      <h1>Movie Info</h1>
      {loading ? (
        <h1 style={{ height: "100vh" }}>Loading...</h1>
      ) : (
        <MovieDetail details={details} />
      )}
    </Wrapper>
  );
}
