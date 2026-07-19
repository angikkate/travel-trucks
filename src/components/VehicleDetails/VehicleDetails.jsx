import CamperFeatures from "../CamperFeatures/CamperFeatures";
import { formatText } from "../../utils/formatText";
import css from "./VehicleDetails.module.css";

export default function VehicleDetails({ camper }) {
  return (
    <section className={css.wrapper}>
      <h2 className={css.title}>
        Vehicle details
      </h2>

      <div className={css.features}>
        <CamperFeatures camper={camper} />
      </div>

      <ul className={css.list}>
        <li>
          <span>Form</span>
          <span>{formatText(camper.form)}</span>
        </li>

        <li>
          <span>Length</span>
          <span>{camper.length}</span>
        </li>

        <li>
          <span>Width</span>
          <span>{camper.width}</span>
        </li>

        <li>
          <span>Height</span>
          <span>{camper.height}</span>
        </li>

        <li>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </li>

        <li>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </section>
  );
}