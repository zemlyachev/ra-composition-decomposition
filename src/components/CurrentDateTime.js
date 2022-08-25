import React from "react";

/**
 * Компонент текущего времени
 * Не имеет параметров
 * Просто показывает время
 *
 * @global component
 * @component
 */
function CurrentDateTime() {
  const now = new Date();
  const options = {
    day: "numeric",
    month: "long",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <span className="text-secondary">
      {now.toLocaleString(undefined, options)}
    </span>
  );
}

export default CurrentDateTime;
