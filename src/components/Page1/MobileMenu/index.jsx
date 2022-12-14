import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

export const MobileMenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className={style.mMenu}>
      <p className={style.p1}>
            Интернет магазин украшений с доставкой по России
          </p>
      <button className={style.hamburger}  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      <div className={
          isNavExpanded ? `${style.navigationMenuExpanded} ${style.navigationMenu}` : `${style.navigationMenu}`
        }>
        <ul className={style.ul}>
        <li>
          <Link to="#">Каталог</Link>
        </li>
        <li>
          <Link to="#">Главная</Link>
        </li>
        <li>
          <Link to="#">О компании</Link>
        </li>
        <li>
          <Link to="#">Оплата и доставка</Link>
        </li>
        <li>
          <Link to="#">Блог</Link>
        </li>
        <li>
          <Link to="#">Контакты</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};
//https://blog.logrocket.com/create-responsive-navbar-react-css/