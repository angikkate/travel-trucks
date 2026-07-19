import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  resetPage,
  setLocation as setLocationFilter,
  setForm as setFormFilter,
  setEngine as setEngineFilter,
  setTransmission as setTransmissionFilter,
} from "../../redux/filters/filtersSlice";

import RadioGroup from "../RadioGroup/RadioGroup";

import mapIcon from "../../assets/icons/map.svg";
import mapGrayIcon from "../../assets/icons/map-gray.svg";
import closeIcon from "../../assets/icons/close.svg";
import css from "./Filters.module.css";

const camperForms = [
  "Alcove",
  "Panel Van",
  "Integrated",
  "Semi Integrated",
];

const engines = [
  "Diesel",
  "Petrol",
  "Hybrid",
  "Electric",
];

const transmissions = [
  "Automatic",
  "Manual",
];

export default function Filters() {
  const dispatch = useDispatch();
  
  const [location, setLocation] = useState("");
  const [form, setForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(resetPage());

    dispatch(setLocationFilter(location));
    dispatch(setFormFilter(form));
    dispatch(setEngineFilter(engine));
    dispatch(setTransmissionFilter(transmission));
  };

  const handleClear = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Location
      </label>

      <div className={css.inputWrapper}>
        <img
          src={location ? mapIcon : mapGrayIcon}
          alt=""
          className={css.inputIcon}
        />

        <input
          className={css.input}
          type="text"
          placeholder="City"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>

      <p className={css.filters}>Filters</p>

      <div className={css.list}>
        <RadioGroup
          title="Camper form"
          name="form"
          options={camperForms}
          value={form}
          onChange={setForm}
        />

        <RadioGroup
          title="Engine"
          name="engine"
          options={engines}
          value={engine}
          onChange={setEngine}
        />

        <RadioGroup
          title="Transmission"
          name="transmission"
          options={transmissions}
          value={transmission}
          onChange={setTransmission}
        />
      </div>

      <button
        type="submit"
        className={css.searchBtn}
      >
        Search
      </button>

      <button
        type="button"
        className={css.clearBtn}
        onClick={handleClear}
      >
        <img
          src={closeIcon}
          alt=""
        />

        <span>Clear filters</span>
      </button>
    </form>
  );
}