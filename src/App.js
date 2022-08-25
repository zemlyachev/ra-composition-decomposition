import React from "react";
import "./App.css";
import MainLogotype from "./components/MainLogotype";
import OtherProject from "./components/OtherProject";
import SearchBar from "./components/SearchBar";
import AdBanner from "./components/AdBanner";
import Widgets from "./components/Widgets";
import News from "./components/News";
import CurrentDateTime from "./components/CurrentDateTime";
import NewsCategories from "./components/NewsCategories";
import Stocks from "./components/Stocks";

function App() {
  const newsCategories = [
    { title: "Главное в СМИ", url: "#" },
    { title: "в Гдетотам", url: "#" },
    { title: "Рекомендуем", url: "#" },
  ];
  const news = [
    { icon: "blind", title: "В городе Н ничего не произошло" },
    {
      icon: "newspaper",
      title: "Срочная новость о новостях",
    },
    {
      icon: "restaurant_menu",
      title: "Очень медленный убийца с ложкой снова в деле",
    },
    { icon: "eco", title: "Очередная неитересная новость" },
    {
      icon: "cruelty_free",
      title: "Что-то очень политическое",
    },
  ];

  return (
    <div className="container-fluid p-10">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <NewsCategories newsCategories={newsCategories}>
            <CurrentDateTime />
          </NewsCategories>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <News data={news} />
          <Stocks />
        </div>
        <div className="col-md-4">
          <OtherProject
            icon="sick"
            title="Папота нат пашипками"
            description="Не смотрите, все просто. Запоминайте и точка."
            url="#"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 align-self-center">
          <MainLogotype url="#" />
        </div>
        <div className="col-md-10">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <AdBanner />
          <Widgets data={news} />
        </div>
      </div>
    </div>
  );
}

export default App;
