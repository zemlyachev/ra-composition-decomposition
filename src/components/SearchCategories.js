import React from "react";

/**
 * Компонент переходов по категориям поиска
 * Без входящих параметров
 *
 * @global
 * @component
 */
function SearchCategories() {
  const categories = [
    "Видео",
    "Картинки",
    "Новости",
    "Старости",
    "Карты",
    "Деньги",
    "Два ствола",
    "ещё",
  ];

  return (
    <div style={{ width: "100%" }}>
      {categories.map((category, i) => (
        <a
          href={"#" + category}
          key={i}
          className="text-primary text-decoration-none px-2"
        >
          {category}
        </a>
      ))}
    </div>
  );
}

export default SearchCategories;
