import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {SearchFilmsPage} from "./components/Pages/SearchFilmsPage";
import {FavoritePage} from "./components/Pages/FavoritePage";
import {HomePage} from "./components/Pages/HomePage";
import {FilmPage} from "./components/Pages/FilmPage";

function App() {
  useEffect(() => {
    document.title = 'Самый крутой КиноПоиск';
  },[]);

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchFilmsPage />} />
              <Route path="/films/:filmID" element={<FilmPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
