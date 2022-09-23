import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { img_300, noPicture } from "./config/config";
import "./Carousel.scss";
import SingleContent from "../../components/singlecontent/SingleContent";
import CustomPagination from "../../utils/CustomPagination";

const handleDragStart = (e) => e.preventDefault();
const Carousel = ({ media_type, time_window }) => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  // const fetchTrending = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  //   );
  //   setContent(data.results);
  // };

  const fetchTrending = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setContent(data.results);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  const items = content.map((c) => (
    <>
      <div className="carouselItem">
        <SingleContent
          key={c.id}
          id={c.id}
          poster={c.poster_path || c.profile_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type={c.media_type}
          vote_average={c.vote_average}
          onDragStart={handleDragStart}
        />
      </div>
    </>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  return (
    <>
      <h2>
        {media_type === "movie"
          ? "Popular movies for today"
          : media_type === "tv"
          ? "Popular series for today"
          : "Actors of the week"}
      </h2>
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        // autoPlay
      />
      <CustomPagination setPage={setPage} />
      <hr className="rounded" />
    </>
  );
};

export default Carousel;
