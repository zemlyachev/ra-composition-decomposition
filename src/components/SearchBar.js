import React from "react";
import SearchExample from "./SearchExample";
import SearchCategories from "./SearchCategories";

/**
 * Крспонент поискового поля
 * Без параметров
 *
 * @global
 * @component
 */
function SearchBar() {
  return (
    <div className="row">
      <div className="col px-0 mt-3">
        <SearchCategories />
        <div>
          <input type="text" name="search" className="search-input" />
          <button className="btn btn-warning" style={{ width: "10%" }}>
            Пойти
          </button>
        </div>
        <SearchExample example="ИИ кибер-коров в древнедекаданской мифологии" />
      </div>
    </div>
  );
}

export default SearchBar;
