import style from "./section3.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const imgs = [
  {
    original:
      "https://157008.lp.tobiz.net/img/900x1200/160820f082624e658a984c66cee784d3.jpg",
    thumbnail:
      "https://157008.lp.tobiz.net/img/100x62/160820f082624e658a984c66cee784d3.jpg",
  },
  {
    original:
      "https://157008.lp.tobiz.net/img/900x1200/e92289a45486ed4df5a474fbf1c2f827.jpg",
    thumbnail:
      "https://157008.lp.tobiz.net/img/100x62/e92289a45486ed4df5a474fbf1c2f827.jpg",
  },
  {
    original:
      "https://157008.lp.tobiz.net/img/900x1200/335a41c96b172ab684b086d077610d7e.jpg",
    thumbnail:
      "https://157008.lp.tobiz.net/img/100x62/335a41c96b172ab684b086d077610d7e.jpg",
  },
  {
    original:
      "https://157008.lp.tobiz.net/img/900x1200/ec80d2454a46073e3f7d16f0701a8364.jpg",
    thumbnail:
      "https://157008.lp.tobiz.net/img/100x62/ec80d2454a46073e3f7d16f0701a8364.jpg",
  },
];
export let Section3 = () => {
  return (
    <div className={style.section}>
      <div className={style.main}>
        <div className={style.div1}>
          <div className={style.allimgs}>
            <ImageGallery items={imgs} />
          </div>
        </div>
        <div className={style.div2}>
          <p className={style.p1}>ВНИМАНИЕ, АКЦИЯ!</p>
          <p className={style.p2}>Бренд Selena</p>
          <p className={style.p3}>Классическое колье-цепочка</p>
          <div className={style.line}></div>
          <p className={style.p4}>
            Длина колье с учетом замка 47 см, а вес 18 грамм. Овальные звенья
            цепи спаяны и имеют размер 13 на 8 мм. Замок карабин позволяет
            регулировать длину цепи по вашему желанию. Помогает сохранить
            красоту и приумножить богатство.
          </p>
          <p className={style.p4}>
            Бижутерный сплав покрыт родием. Родий благородный металл платиновой
            группы, обладает гипоаллергенными свойствами. Следует избегать
            механических повреждений и контактов с жидкостью. Цепь идет в
            комплекте с этикеткой и пломбой, упакована в коробочку.{" "}
          </p>
          <p className={style.p4}>Основные характеристики:</p>
          <ul className={style.ul}>
            <li>
              Модель колье: <u>оригинальной формы</u>
            </li>
            <li>
              Состав бижутерии: <u>бижутерный сплав</u>
            </li>
            <li>
              Вид замка: <u>карабин</u>
            </li>
            <li>
              Декоративные элементы: <u>без элементов</u>
            </li>
            <li>
              Длина предмета: <u>45 см</u>
            </li>
            <li>
              Комплектация: <u>колье</u>
            </li>
            <li>
              Страна бренда: <u>Selena, Россия</u>
            </li>
          </ul>
          <p className={style.p3}>
            Стоимость: <del>3150 рублей</del> <b>2790 рублей</b>
          </p>
          <button className={style.btn}>В корзину</button>
        </div>
      </div>
    </div>
  );
};
