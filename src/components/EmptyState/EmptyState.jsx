// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { resetFilters } from "../../redux/filters/filtersSlice";

// import css from "./EmptyState.module.css";

// import emptyImage from "../../assets/images/not-found.png";
// import closeIcon from "../../assets/icons/close.svg";

// export default function EmptyState() {
//   const dispatch = useDispatch();  
//   const handleReset = () => {
//     dispatch(resetFilters());
//   };

//   const navigate = useNavigate();

//   const handleViewAll = () => {
//     dispatch(resetFilters());
//     navigate("/catalog");
//   };

//   return (
//     <div className={css.wrapper}>
//       <img
//         src={emptyImage}
//         alt="No campers found"
//         className={css.image}
//       />

//       <h2 className={css.title}>
//         No campers found
//       </h2>

//       <p className={css.text}>
//         We couldn`t find any campers that match your filters. <br/>
//         Try adjusting your search or clearing some filters.
//       </p>

//       <div className={css.buttons}>
        
//         <button
//           type="button"
//           className={css.clearBtn}
//           onClick={handleReset}
//         >
//           <img src={closeIcon} alt="" />
//           <span>Clear filters</span>
//           </button>

//         <button
//           type="button"
//           className={css.allBtn}
//           onClick={handleViewAll}
//         >
//           View all campers
//         </button>
//       </div>
//     </div>
//   );
// }
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