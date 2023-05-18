import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);
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
  console.log(details);
  return (
    <>
      <h1>Detail</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>{details.title}</h2>
        </div>
      )}
    </>
  );
}
