import React from "react";
import PropTypes from "prop-types";

/**
 * Компонент переходов по категориям новостей
 *
 * @global
 * @component
 */
function NewsCategories(props) {
  const { newsCategories } = props;
  return (
    <>
      <div style={{ width: "100%" }}>
        {newsCategories.map((category, i) => (
          <a
            href={category.url}
            key={i}
            className="text-primary text-decoration-none px-2"
          >
            {category.title}
          </a>
        ))}
        {props.children}
      </div>
    </>
  );
}

NewsCategories.propTypes = {
  /** @param {Array[]} newsCategories[] Список котегорий новостей  */
  newsCategories: PropTypes.arrayOf(
    PropTypes.shape({
      /** @param  {string} newsCategories[].title Заголовок категории */
      title: PropTypes.string.isRequired,
      /** @param  {string} newsCategories[].url Ссылка на переход в категорию */
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsCategories;
