import style from "./section4.module.css";

import { TbCarCrane } from "react-icons/tb";
import { TbNews } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { TbVocabulary } from "react-icons/tb";

const info = [
  {icon: <TbCarCrane />, title: "БЕСПЛАТНАЯ ДОСТАВКА", text: "При заказе от 1500 руб. мы бесплатно доставим посылку по всей территории России. Подробнее об условиях доставки нашего интернет-магазина вы можете прочитать здесь"},
  {icon: <TbNews />, title: "ОБРАБОТКА ЗАКАЗА 1 ДЕНЬ", text: "После размещения заказа мы незамедлительно свяжемся с вами для подтверждения и подробных консультаций - персональный менеджер ответит на любые ваши вопросы"},
  {icon: <TbReportMoney />, title: "ЦЕНЫ ОТ ПРОИЗВОДИТЕЛЕЙ", text: "Мы работаем с фабриками-производителями напрямую и без посредников. В Интернет-магазине Beautifull только подлинные товары по фабричным ценам"},
  {icon: <TbVocabulary />, title: "ГАРАНТИЯ 100% НА ВСЕ", text: "Мы даем абсолютную 100% гарантию на все предоставляемые товары в ассортименте нашего интернет магазина. И это доступно каждому нашему клиенту прямо сейчас (сделайте заказ)"},
]
export let Section4 = () => {
  return (
    <div className={style.section}>
      <div className={style.main}>
        <div className={style.div1}>
          <p className={style.p1}>Наши преимущества</p>
          <p className={style.p2}>Почему нас выбирают тысячи клиентов</p>
        </div>
        <div className={style.div2}>
          {info.map( (el) => {
            return (
              <div className={style.info}>
               <div className={style.icon}> {el.icon} </div>
               <p className={style.p3}>{el.title}</p>
               <p className={style.p4}>{el.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};
