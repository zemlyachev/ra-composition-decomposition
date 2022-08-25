import React from "react";
import PropTypes from "prop-types";

/**
 * Компонет для рекламного баннера
 *
 * @component
 */
function AdBanner(props) {
  return (
    <div
      className="bg-light border border-secondary 
       my-3 d-flex justify-content-center align-items-center"
      style={{ width: "80%", height: "4rem" }}
    >
      <a href={props.url} className="text-reset text-decoration-none">
        {props.alt}
      </a>
    </div>
  );
}

AdBanner.defaultProps = {
  url: "#",
  alt: "Здесь могла быть ваша реклама",
};

AdBanner.propTypes = {
  /** @param  {string} props.img - Изображениер баннера */
  img: PropTypes.string,
  /** @param  {string} props.url - Ссылка для перехода */
  url: PropTypes.string,
  /** @param  {string} props.alt - Подпись баннера */
  alt: PropTypes.string,
};

export default AdBanner;
