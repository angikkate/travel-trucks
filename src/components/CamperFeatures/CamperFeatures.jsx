import css from "./CamperFeatures.module.css";
import { formatText } from "../../utils/formatText";

export default function CamperFeatures({ camper }) {
  const booleanFeatures = [
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "gas",
    "water",
  ];

  const features = [
    camper.transmission,
    camper.engine,
    camper.form,
    ...booleanFeatures.filter(feature => camper[feature]),
  ];

  return (
    <ul className={css.list}>
      {features.map(feature => (
        <li
          key={feature}
          className={css.item}
        >
          {formatText(feature)}
        </li>
      ))}
    </ul>
  );
}