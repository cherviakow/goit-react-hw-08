import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  // const [filter, setFilterValue] = useState("");
  const [ setFilterValue] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterValue(value);
    dispatch(setFilter(value));
  };

  return (
    <div className={css.container}>
      <h2 className={css.cont}>Contacts</h2>
      <h3 className={css.findContact}>Find contatcs by name</h3>
      <label>
        <input
          name="filter"
          type="text"
          className={css.filterInput}
          value={filter}
          
          onChange={handleFilterChange}></input>
      </label>
    </div>
  );
}


