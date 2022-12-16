import { BsFillArchiveFill } from "react-icons/bs";
import style from "./index.module.css";

export let Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.main}>
        <div className={style.div1}> My lologo</div>
        <div className={style.div2}>
          <p className={style.p1}>
            Интернет магазин, 123456, г. Чебоксары, ул. Центральная 1, офис 1
            ИНН 1234567890 ОГРН 123456789012 Политика конфиденциальности
          </p>
        </div>
        <div className={style.div3}>
          <p className={style.p2}>
            <BsFillArchiveFill /> &nbsp; 8 800 333 22 33
          </p>
          <p className={style.p3}>Работаем с 8:00 до 17:00 без выходных</p>
        </div>
      </div>
    </div>
  );
};
