import React from "react";
import PropTypes from "prop-types";

/**
 * Компонент для отображения списка
 *
 * @global
 * @component
 */
function List(props) {
  const { list } = props;

  return (
    <ul className="list-unstyled">
      {list.map((o, i) => (
        <li key={i}>
          <a href={o.url} className="text-reset text-decoration-none">
            <span className="material-icons ml-n3 pr-1">{o.icon}</span>
            <span>{o.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

List.defaultProps = {
  list: [
    { title: "Exercitation quis amet qui ad officia amet in.", url: "/" },
    { title: "Qui eiusmod laboris elit velit.", url: "/" },
    { title: "Occaecat occaecat sit officia do magna.", url: "/" },
    { title: "Magna pariatur ad aliqua eiusmod eu magna.", url: "/" },
  ],
};

List.propTypes = {
  /** @param {Array[]} list[] Список элементов для вывода */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      /** @param  {string} list[].title Заголовок элемента */
      title: PropTypes.string.isRequired,
      /** @param  {string} list[].url Ссылка для перехода */
      url: PropTypes.string,
      /** @param  {string} [list[].icon] Иконка */
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default List;
