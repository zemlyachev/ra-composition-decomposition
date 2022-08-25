import React from "react";
import PropTypes from "prop-types";
import HeadingLink from "./HeadingLink";

/**
 * Компонент виджет погоды
 *
 * @global
 * @component
 */
function WeatherWidget(props) {
  return (
    <>
      <HeadingLink url="#">Погода</HeadingLink>
      <div className="row align-items-center">
        <div className="col row align-items-center">
          <span className="material-icons col-5" style={{ fontSize: "3rem" }}>
            sunny_snowing
          </span>
          <p className="col h3 pl-0">+1 C</p>
        </div>
        <div className="col text-small">
          <p className="p-0 m-0">
            <small>Утром: +1 C</small>
          </p>
          <p className="p-0 m-0">
            <small>Днём: +3 C</small>
          </p>
        </div>
      </div>
    </>
  );
}

WeatherWidget.propTypes = {
  /** @param {Object} coordinates Местоположение для определения погоды */
  coordinates: PropTypes.shape({
    /** @param  {string} coords.latitude Широта */
    latitude: PropTypes.string.isRequired,
    /** @param  {string} coords.longitude Долгота */
    longitude: PropTypes.string.isRequired,
  }),
};

export default WeatherWidget;
