import React from "react";
import PropTypes from "prop-types";

/**
 * Компонент главного логотипа
 *
 * @component
 * @global
 */
function MainLogotype({ url }) {
  return (
    <h1 className="mr-3">
      <a href={url} className="text-reset text-decoration-none">
        <span className="text-warning">Не</span>поиск
      </a>
    </h1>
  );
}

MainLogotype.propTypes = {
  /** @param {string} props.url - переход по логотипу */
  url: PropTypes.string.isRequired,
};

export default MainLogotype;
