import React from "react";
import PropTypes from "prop-types";

/**
 * Компонент сылки-заголовка
 *
 * @global component
 */
function HeadingLink(props) {
  return (
    <h2 className="pt-3">
      <a href={props.url} className="text-decoration-none text-danger">
        {props.children}
      </a>
    </h2>
  );
}

HeadingLink.propTypes = {
  /** @param {string} props.url Ссылка для перехода */
  url: PropTypes.string.isRequired,
  /** @param {object} props.children Заголовок и дополнительный контент под заголовком при необходимости */
  children: PropTypes.node,
};

export default HeadingLink;
