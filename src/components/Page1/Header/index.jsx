import { Menu } from "../Menu";
import style from "./index.module.css";
import { BsFillArchiveFill } from "react-icons/bs";

export let Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerTop}>
        <div className={style.div1}> My lologo</div>
        <div className={style.div2}>
          <p className={style.p1}>
            Интернет магазин украшений с доставкой по России
          </p>
        </div>
        <div className={style.div3}>
          <p className={style.p2}>
          <BsFillArchiveFill /> &nbsp; 8 800 333 22 33</p>
          <p className={style.p3}>Работаем с 8:00 до 17:00 без выходных</p>
        </div>
      </div>
      <Menu />
    </div>
  );
};
