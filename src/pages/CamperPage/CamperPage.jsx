import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Container from "../../components/Container/Container";
import RatingLocation from "../../components/RatingLocation/RatingLocation";
import VehicleDetails from "../../components/VehicleDetails/VehicleDetails";
import ReviewList from "../../components/ReviewList/ReviewList";
import BookingForm from "../../components/BookingForm/BookingForm";
import Loader from "../../components/Loader/Loader";

import { fetchCamperById } from "../../redux/campers/operations";
import {
  selectCamper,
  selectLoading
} from "../../redux/campers/selectors";

import { formatPrice } from "../../utils/formatPrice";

import css from "./CamperPage.module.css";

export default function CamperPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (!camper) return null;

  const {
    name,
    price,
    rating,
    location,
    reviews,
    gallery,
    description,
  } = camper;

  return (
    <Container>
      <section className={css.page}>

        <div className={css.top}>

          <div className={css.left}>
            <div className={css.mainImageWrapper}>
              <img
                src={gallery[0].original}
                alt={name}
                className={css.mainImage}
              />
            </div>

            <div className={css.gallery}>
              {gallery.map(image => (
                <img
                  key={image.original}
                  src={image.thumb}
                  alt={name}
                  className={css.thumb}
                />
              ))}
            </div>
          </div>

          <div className={css.right}>

            <div className={css.info}>
              <h1 className={css.title}>
                {name}
              </h1>

              <RatingLocation
                rating={rating}
                reviewsCount={reviews.length}
                location={location}
              />

              <p className={css.price}>
                € {formatPrice(price)}
              </p>

              <p className={css.description}>
                {description}
              </p>
            </div>

            <VehicleDetails camper={camper} />

          </div>

        </div>

        <div className={css.bottom}>
          <h2 className={css.title}>
            Reviews
          </h2>

          <div className={css.section}>
            <ReviewList reviews={reviews} />
            <BookingForm />
          </div>
        </div>

      </section>
    </Container>
  );
}