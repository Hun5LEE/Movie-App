import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Movie({ movie }) {
  const { id, medium_cover_image, title, summary, genres } = movie;

  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={medium_cover_image} alt="..." />
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres?.map((genre, i) => {
          return <li key={genre}>{genre}</li>;
        })}
      </ul>
    </div>
  );
}

// props 타입
Movie.propTypes = {
  movie: {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  },
};
