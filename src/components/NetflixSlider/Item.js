import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import Mark from "./Mark";
import "./Item.scss";
import noMovie from "../../images/noposter.jpg";

const Item = ({ movie, is_disabled, onClick, setName, setDate }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.imdbID;
      const onMouseEnter = (movie) => {
        setName(movie.Title);
        setDate(movie.Year);
      };

      const onMouseLeave = () => {
        setName("");
        setDate("");
      };

      return (
        <>
          <div
            onMouseEnter={() => onMouseEnter(movie)}
            onMouseLeave={() => onMouseLeave(movie)}
            ref={elementRef}
            className={cx("item")}
            onClick={onClick}
            disabled={is_disabled}
            style={{
              opacity: is_disabled ? 0.2 : 1,
              cursor: is_disabled ? null : "pointer",
            }}
          >
            <img src={movie.Poster === "N/A" ? noMovie : movie.Poster} alt="" />
            {isActive && <Mark />}
          </div>
        </>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
