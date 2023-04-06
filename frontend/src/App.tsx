import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './pages/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Podcasts from './pages/Podcasts';
/*
<div className="App">
  <TopBanner saying="Carter's React Website - Main" />
  <TopBanner saying="Carter's React Website - Support" />
  <MovieList />
</div>
*/
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="podcasts"
              element={
                <>
                  <Podcasts />
                </>
              }
            />
            <Route path="movies" element={<MovieList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
