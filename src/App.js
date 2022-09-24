import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./pages/carousel/Carousel";
import { GlobalProvider } from "./context/GlobalState";
import Wishlist from "./pages/wishlist/WishList";
import { NavBar } from "./layout/navbar/NavBar";
import "./sass/app.scss";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Carousel media_type="movie" time_window="day" />
                  <Carousel media_type="tv" time_window="day" />
                  <Carousel media_type="person" time_window="week" />
                </>
              }
            />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
