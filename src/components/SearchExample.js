import React from "react";
import PropTypes from "prop-types";

/**
 * Компонент примера поиска
 *
 * @global
 * @component
 */
function SearchExample({ example }) {
  return (
    <div>
      Найдется не все. Например:{" "}
      <span className="text-secondary">{example}</span>
    </div>
  );
}

SearchExample.propTypes = {
  /** @param {string} props.example пример поискового запроса */
  example: PropTypes.string.isRequired,
};

export default SearchExample;
