import { useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
} from "../../redux/campers/selectors";

import CamperCard from "../CamperCard/CamperCard";

import css from "./CamperList.module.css";

export default function CamperList() {
  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);

  if (error) {
    return (
      <p className={css.error}>
        Something went wrong. Please try again later.
      </p>
    );
  }

  return (
    <>
      <ul className={css.list}>
        {campers.map(camper => (
          <CamperCard
            key={camper.id}
            camper={camper}
          />
        ))}
      </ul>
    </>
  );
}