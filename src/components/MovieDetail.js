import { styled } from "styled-components";

export default function MovieDetail({ details }) {
  const {
    title,
    year,
    medium_cover_image,
    runtime,
    rating,
    genres,
    description_full,
  } = details;

  const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const MovieImg = styled.img`
    width: 300px;
    border-radius: 5px;
  `;

  return (
    <>
      <MovieInfo>
        <MovieImg src={`${medium_cover_image}`} />
        <h2>
          {title} ({year})
        </h2>
        <h3>
          Runtime : {runtime} m / Rating : {rating}
        </h3>
        <ul>
          {genres.map((genre) => {
            return <li key={genre}>{genre}</li>;
          })}
        </ul>
      </MovieInfo>
      <div style={{ padding: "2rem" }}>
        <h2>👇🏻 Description 👇🏻</h2>
        <p>{description_full}</p>
      </div>
    </>
  );
}
