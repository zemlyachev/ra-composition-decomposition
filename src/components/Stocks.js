import React from "react";

/**
 * Компонет для отображения акций
 * Без параметров
 *
 * @global
 * @component
 */
function Stocks(props) {
  return (
    <div className="row text-uppercase">
      <div className="col">USD 33,33 +0,00</div>
      <div className="col">EUR 22,22 +0,11</div>
      <div className="col">НЕФТЬ 44,44 +0,22</div>
      <div className="col">
        <button style={{ width: "2rem" }}>...</button>
      </div>
    </div>
  );
}

export default Stocks;
