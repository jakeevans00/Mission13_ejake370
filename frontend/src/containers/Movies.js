import { useState } from 'react';
import data from '../MovieData.json';
import React from 'react';

//Loads up the JSON data
const MDS = data.MovieData;

//this is what will be performed logically, then rendered on the screen
export default function Movies() {
  const [listOfMovies, setListOfMovies] = useState(MDS);

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.Title}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
