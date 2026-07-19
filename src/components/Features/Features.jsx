import automaticIcon from "../../assets/icons/automatic.svg";
import petrolIcon from "../../assets/icons/petrol.svg";
import alcoveIcon from "../../assets/icons/alcove.svg";
import { formatText } from "../../utils/formatText";

import css from "./Features.module.css";

export default function Features({ transmission, engine, form }) {
  const items = [
    {
      icon: automaticIcon,
      text: formatText(transmission),
    },
    {
      icon: petrolIcon,
      text: formatText(engine),
    },
    {
      icon: alcoveIcon,
      text: formatText(form),
    },
  ];

  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.text} className={css.item}>
          <img
            src={item.icon}
            alt={item.text}
            className={css.icon}
          />

          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}