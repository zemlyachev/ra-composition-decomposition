import React from "react";
import PropTypes from "prop-types";
import HeadingLink from "./HeadingLink";

/**
 * Компонет саморекламы других сервисов
 *
 * @component
 * @global
 */
function OtherProject(props) {
  return (
    <div>
      <div>
        <span
          className="material-icons"
          style={{ fontSize: "5rem", color: "green" }}
        >
          {props.icon}
        </span>
      </div>
      <HeadingLink url={props.url}>{props.title}</HeadingLink>
      <div>{props.description}</div>
    </div>
  );
}

OtherProject.propTypes = {
  /** @param {string} props.icons имя иконтки для Material Icons */
  icon: PropTypes.string.isRequired,
  /** @param {string} props.title название проекта */
  title: PropTypes.string.isRequired,
  /** @param {string} props.description описание проекта */
  description: PropTypes.string,
  /** @param {string} props.url ссылка не переход */
  url: PropTypes.string.isRequired,
};

export default OtherProject;
