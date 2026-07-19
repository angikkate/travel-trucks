import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../../redux/filters/filtersSlice";
import { selectPage } from "../../redux/filters/selectors";
import { selectTotal, selectCampers } from "../../redux/campers/selectors";

import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn() {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const campers = useSelector(selectCampers);

  if (campers.length >= total) {
    return null;
  }

  const handleClick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <button type="button" className={css.button}onClick={handleClick}>
      Load More
    </button>
  );
}