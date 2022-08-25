import React from "react";
import PropTypes from "prop-types";
import List from "./List";

/**
 * Копонент вывода новостей
 *
 * @component
 */
function News({ data }) {
  return <List list={data} />;
}

News.propTypes = {
  /** @param {Array[]} data[] Список элементов для вывода */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      /** @param  {string} data[].title Заголовок элемента */
      title: PropTypes.string.isRequired,
      /** @param  {string} data[].url Ссылка для перехода */
      url: PropTypes.string,
      /** @param  {string} [data[].icon] Иконка */
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default News;
