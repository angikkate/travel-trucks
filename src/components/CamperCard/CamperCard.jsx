import { Link } from "react-router-dom";

import RatingLocation from "../RatingLocation/RatingLocation";
import Features from "../Features/Features";
import { formatPrice } from "../../utils/formatPrice";
import css from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    reviews = [],
    location,
    description,
    transmission,
    engine,
    gallery,
    form,
  } = camper;

  return (
    <li className={css.card}>
  <img
    className={css.image}
    src={gallery[0].thumb}
    alt={name}
  />

  <div className={css.info}>

    <div className={css.header}>
      <h2 className={css.name}>{name}</h2>

      <p className={css.price}>
        € {formatPrice(price)}
      </p>
    </div>

    <RatingLocation
      rating={rating}
      reviewsCount={reviews.length}
      location={location}
    />

    <p className={css.description}>
      {description}
    </p>

    <Features
      transmission={transmission}
      engine={engine}
      form={form}
    />

    <Link
      className={css.button}
      to={`/catalog/${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Show more
    </Link>

  </div>
</li>
  );
}