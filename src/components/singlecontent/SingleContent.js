import React from "react";
import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../assets/config";
import "./SingleContent.scss";
import ContentModal from "../modal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  onDragStart,
}) => {
  return (
    <ContentModal media_type={media_type} id={id} className="media">
      <Badge
        overlap="rectangular"
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        // className="poster"
        className="carouselItem__img"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv"
          ? "TV Series"
          : media_type === "movie"
          ? "Movie"
          : "Actor"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
