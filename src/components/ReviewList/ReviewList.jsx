import css from "./ReviewList.module.css";

import starIcon from "../../assets/icons/star.svg";
import starGrayIcon from "../../assets/icons/star-gray.svg";

export default function ReviewList({ reviews }) {
  return (
    <section className={css.wrapper}>

      <ul className={css.list}>
        {reviews.map(review => (
          <li
            key={review.reviewer_name}
            className={css.item}
          >
            <div className={css.header}>

              <div className={css.avatar}>
                {review.reviewer_name.charAt(0)}
              </div>

              <div>

                <h3 className={css.name}>
                  {review.reviewer_name}
                </h3>

                <div className={css.stars}>
                  {[1, 2, 3, 4, 5].map(number => (
                    <img
                      key={number}
                      src={
                        number <= review.reviewer_rating
                          ? starIcon
                          : starGrayIcon
                      }
                      alt=""
                    />
                  ))}
                </div>

              </div>

            </div>

            <p className={css.comment}>
              {review.comment}
            </p>

          </li>
        ))}
      </ul>
    </section>
  );
}