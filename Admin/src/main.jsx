import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import AddMovie from "./views/AddMovie"
import Movie from "./views/Movie"
import EditMovie from "./views/EditMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/addmovie" element={<AddMovie />}></Route>
      <Route path="/movie/:id" element={<Movie/>}></Route>
      <Route path="/movies/:id/update" element={<EditMovie />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
