//import data from '../MovieDataSample.json';
//import data2 from '../MovieData.json';
import { useEffect, useState } from 'react';
import { Movie } from '../types/movies';

//const mds = data.MovieDataSample;
//const mds2 = data2.MovieData;

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchFood();
  }, []);

  return (
    <div className="p-4">
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <table className="table border table-bordered table-striped">
        <thead>
          <tr>
            <th>Movie Id</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited?</th>
            <th>LentTo</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.movieId}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.category}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
