import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="inner-container">
          <Routes>
            <Route path="/" element={<Home />}>
              Home
            </Route>
            <Route path="/movieDetail/:imdbId" element={<MovieDetail />}>
              MovieDetail
            </Route>
            <Route path="*" element={<PageNotFound />}>
              PageNotFound
            </Route>
          </Routes>
        </div>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
