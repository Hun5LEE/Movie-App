import PropTypes from "prop-types";

export default function Movie({ movie }) {
  const { medium_cover_image, title, summary, genres } = movie;

  return (
    <div>
      <img src={medium_cover_image} alt="..." />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, i) => {
          return <li key={genre}>{genre}</li>;
        })}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  movie: {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  },
};
