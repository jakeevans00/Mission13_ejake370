import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import MovieList from './movie/MovieList';
import Podcasts from './containers/Podcasts';

//This is where the routes are found!
export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Movies" element={<MovieList />} />
      <Route path="/Podcasts" element={<Podcasts />} />
    </Routes>
  );
}
