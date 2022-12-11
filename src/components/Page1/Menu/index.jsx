import { Link } from "react-router-dom";
import style from "./index.module.css";

export let Menu = () => {
  return (
    <div className={style.menu}>
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
  );
};
