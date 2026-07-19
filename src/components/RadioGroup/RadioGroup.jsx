import css from "./RadioGroup.module.css";

export default function RadioGroup({
  title,
  name,
  options,
  value,
  onChange,
}) {
  return (
    <section className={css.group}>
      <h3 className={css.title}>{title}</h3>

      <div className={css.radioList}>
        {options.map(option => (
          <label
            key={option}
            className={css.radioLabel}
          >
            <input
              className={css.radio}
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={e => onChange(e.target.value)}
            />

            <span className={css.customRadio}></span>
            <span>{option}</span>
          </label>
        ))}
      </div>
    </section>
  );
}