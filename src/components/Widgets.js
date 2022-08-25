import React from "react";
import WeatherWidget from "./WeatherWidget";
import HeadingLink from "./HeadingLink";
import List from "./List";

/**
 * Компонент различных виджетов снизу строки поиска
 *
 * @component
 */
function Widgets(props) {
  return (
    <div className="row">
      <div className="col-4 px-0">
        <WeatherWidget />
        <HeadingLink url="#">Посещаемое</HeadingLink>
        <List />
      </div>
      <div className="col-4 px-0">
        <HeadingLink url="#">Карта Гдетотама</HeadingLink>
        <p>Расписания</p>
        <div className="row align-items-center">
          <div className="col pt-2">
            <HeadingLink url="#">Телепрограмма</HeadingLink>
          </div>
          <div className="col">
            <button className="badge badge-info mt-3">Эфир</button>
          </div>
        </div>
        <List />
      </div>
      <div className="col-4 px-0">
        <HeadingLink url="#">Эфир</HeadingLink>
        <List />
      </div>
    </div>
  );
}

export default Widgets;
