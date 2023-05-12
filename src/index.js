import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layouts/Layout";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./index.css";
import App from "./App";
import MovieDetail from "./components/MovieDetail";
import Movies from "./components/Movies";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetail />} />
      </Route>
    </Routes>{" "}
  </BrowserRouter>
);
