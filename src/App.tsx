import React, { useState } from "react";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import StraightOutlinedIcon from "@mui/icons-material/StraightOutlined";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import FmdGoodIcon from '@mui/icons-material/FmdGood';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function App() {
  const [cards] = useState([
    {
      title: ".",
      text: `ПРОЗКЕТ КОТОРЫЙ СЧИТАЕТСЯ `,
      date: "24 декабряб ,21",
    },
    {
      title: ".",
      text: `НАЗВАНИЕ ПРОЕКТА ОТЛРЫТИЕ КОФЕЙНИ `,
      date: "10 октября,21",
    },
    {
      title: ".",
      text: ` ЗНАЙ СВОЕГО КЛИЕНТА, КТО ПРОЖИВАЕТ В РАЙОНЕ БИЗНЕСА? `,
      date: "10 октября,21",
    },
    {
      title: ".",
      text: `ЗНАЙ СВОЕГО КЛИЕНТА, КТО ПРОЖИВАЕТ В РАЙОНЕ БИЗНЕСА? `,
      date: "10 октября,21",
    },
    {
      title: ".",
      text: `ПЛОТНОСТЬ НАСЕЛЕНИЯ МОСКВЫ И МО `,
      date: "10 октября,21",
    },
  ]);

  return (
    <main>
      <div className="App">
        <div className="right">
          <div className="navbar">
            <h1> GEO</h1>
            <a href="#news">Главная</a>
            <a href="#news">Личьнй Кабинет</a>
            <a href="#news">Маркетплейс</a>
            <a href="#news">Каталог рецептов</a>
            <a href="#news">Тарифы</a>
            <a href="#news">Спразвочик</a>
            <h4> Plaform </h4>
            <form>
              <input type="text" />
              <SearchIcon
                sx={{
                  color: "gray",
                  width: 20,
                  position: "relative",
                  top: 8,
                  left: -200,
                }}
              />
            </form>
            <section>
              <div className="container">

                <div className="cards">

                <div id="rectangle_1"  > 
                <p>     САЗДАТЬ НОВЫЙ <b></b>
                  ПРОЕКЕТ</p>
                  <AddCircleOutlineIcon sx={{ 
                    color: 'red',
                   position: "relative", left: 109, fontSize: 60, top:30  }} />
              </div>
                  {cards.map((card, i) => (
                    <div key={i} className="card">
                      <h3> {card.title}</h3>
                      <h5>{card.text}</h5>
                      <p>{card.date}</p>
                      <ArrowCircleRightIcon
                        sx={{
                          fontSize: "normal",
                          position: "relative",
                          left: 200,
                        }}
                      />
                      <StraightOutlinedIcon
                        sx={{ position: "relative", left: 150 }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="left">
          <div className="one">
            <h3> Константин фролов</h3>
            <h4>
              {" "}
              {"<"}000 Изаляисные Техмолсгии{">"}{" "}
            </h4>
            <p> Тариф Минимальный . 120 050p</p>
          </div>
          <div className="two">
            <h3>НЕ ЗНАЕТЕ С ЧЕГО НАЧАТЬ? ПОСМОТРИТЕ РЕЦЕПТЫ</h3>
            <h4>04</h4>
            <h5>12 РЕЧЕПТОВ</h5>
            <ArrowCircleRightIcon
              sx={{ position: "relative", left: 260, top: 12 }}
            />
          </div>
          <h5 className="none"> Советы для начинающих</h5>

          <ArrowCircleLeftIcon
            sx={{ position: "relative", top: 60, right: -350 }}
          />
          <ArrowCircleRightIcon
            sx={{ position: "relative", top: 60, right: -355 }}
          />
          <div className="contwo">
            <div className="box1">
               
                <h4 className="aaa">Слом </h4>
                <p className="pp">СЛОЙ МОЖНО 
                НАКЛАДЫВАТЬ ДРУГ 
                НА ДРУГА ЧТОЬЫ ПОЛУЧИТЬ
                МАКСИМСЛЬНО ТОЧНЫЕ ДАННЫЕ </p>
              
            </div>

            <div className="box2">
              <h4 className="bbb"> МОДЕЛИ</h4>
              <p className="pp2">МАДЕЛИ МОЖНО 
              НАСТРАИВАТЬ </p>
            </div>
          </div>
          <div className="plast">
            <p>События и новости</p>

            <ArrowCircleLeftIcon
            sx={{ position: "relative", top: -30, right: -350 }}
          />
          <ArrowCircleRightIcon
            sx={{ position: "relative", top: -30, right: -355 }}
          />
         
              
            
            <div className="contone">
              <div className="box3">
                <h4 className="ddd"> 15 декабря </h4>
                <p className="cc1">НОВЫЕ ДАННЫЕ НА СЛОЯЛ
                ТЕПЕРЬ АВТОМАТИЧЕСКИ
                ПОДГРУЖАЮТСЧ ПРИ
                ПОДПИСКИЕ НА СЛОЙ </p>
              </div>

              <div className="box5">
                <h4 className="eee"> 12 АПРЕЛЯ </h4>
                  <p className="ll2">КЛИЕНТАМИ БАНКА
                  ЯВЛЯЮТСЯ БОЛЕЕ 14 МЛН
                  ЧЕЛОВЕК И БОЛЕЕ 500 ТЫС
                  ЮРИДИЧЕСКИХ ЛИЦ </p>
              </div>
            </div>
            <div className="foot">
              
              <p> 125047, Москва</p>
              <p>4-я Тверская-Ямскаяб 14с1</p>
              <p>8 (800) 100-08-00</p>

              <FmdGoodIcon  sx={{ position: "relative", left: 55,
              top: -60,
               color: 'white' }} />

               <PhoneAndroidIcon sx={{ color: 'white', position: "relative",
               top: -20, left: 30,
               }}/>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
