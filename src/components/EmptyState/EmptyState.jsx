import closeIcon from "../../assets/icons/close.svg";
import emptyImage from "../../assets/images/not-found.png";

import css from "./EmptyState.module.css";

export default function EmptyState({ onReset }) {
  return (
    <div className={css.wrapper}>
      <img
        src={emptyImage}
        alt="No campers found"
        className={css.image}
      />

      <h2 className={css.title}>
        No campers found
      </h2>

      <p className={css.text}>
        Try changing your filters.
      </p>

      <div className={css.buttons}>
        <button
          type="button"
          className={css.clearBtn}
          onClick={onReset}
        >
          <img
            src={closeIcon}
            alt=""
          />

          <span>Clear filters</span>
        </button>

        <button
          type="button"
          className={css.allBtn}
          onClick={onReset}
        >
          View all campers
        </button>
      </div>
    </div>
  );
}