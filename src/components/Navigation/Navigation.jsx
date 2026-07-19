import { NavLink } from "react-router-dom";

import Container from "../Container/Container";

import css from "./Navigation.module.css";
import logo from "../../assets/images/logo.svg";

export default function Navigation() {
  const buildLinkClass = ({ isActive }) =>
    isActive ? `${css.link} ${css.active}` : css.link;

  return (
    <header className={css.header}>
      <Container className={css.container}>
        <NavLink to="/" className={css.logoLink}>
          <img
            src={logo}
            alt="TravelTrucks logo"
            className={css.logo}
          />
        </NavLink>

        <nav>
          <ul className={css.navList}>
            <li>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/catalog" className={buildLinkClass}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>

      </Container>
    </header>
  );
}