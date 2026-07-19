import css from "./RatingLocation.module.css";

import starIcon from "../../assets/icons/star.svg";
import mapIcon from "../../assets/icons/map.svg";

export default function RatingLocation({
  rating,
  reviewsCount,
  location,
}) {
  return (
    <div className={css.wrapper}>
      <div className={css.rating}>
        <img
          src={starIcon}
          alt="Rating"
          className={css.icon}
        />

        <span>
          {rating} ({reviewsCount} Reviews)
        </span>
      </div>

      <div className={css.location}>
        <img
          src={mapIcon}
          alt="Location"
          className={css.icon}
        />

        <span>{location}</span>
      </div>
    </div>
  );
}