import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilters } from "../../redux/filters/selectors";
import {
  selectCampers,
  selectLoading
} from "../../redux/campers/selectors";

import { fetchCampers } from "../../redux/campers/operations";
import { resetFilters } from "../../redux/filters/filtersSlice";

import Container from "../../components/Container/Container";
import Filters from "../../components/Filters/Filters";
import CamperList from "../../components/CamperList/CamperList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import EmptyState from "../../components/EmptyState/EmptyState";
import Loader from "../../components/Loader/Loader";

import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const [filtersKey, setFiltersKey] = useState(0);

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [dispatch, filters]);

  const handleReset = () => {
    dispatch(resetFilters());

    setFiltersKey(prev => prev + 1);
  };

  return (
    <Container>
      {loading && <Loader />}
      
      <div className={css.catalog}>
        <aside className={css.sidebar}>
          <Filters key={filtersKey} />
        </aside>

        <div className={css.content}>
          {!loading && campers.length === 0 ? (
            <EmptyState
              onReset={handleReset}
            />
          ) : (
            <>
              <CamperList />

              <div className={css.loadMore}>
                <LoadMoreBtn />
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}