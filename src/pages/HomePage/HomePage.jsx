import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import heroImg from "../../assets/images/hero.jpg";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section
      className={css.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Container>
        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>

          <p className={css.subtitle}>
            You can find everything you want in our catalog
          </p>

          <Link to="/catalog" className={css.button}>
            View Now
          </Link>
        </div>
      </Container>
    </section>
  );
}