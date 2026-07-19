import { useSelector } from "react-redux";

import CamperCard from "../CamperCard/CamperCard";

import {
  selectCampers,
  selectError,
} from "../../redux/campers/selectors";

import css from "./CamperList.module.css";

export default function CamperList() {
  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);

  if (error) {
    return <p>{error}</p>;
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