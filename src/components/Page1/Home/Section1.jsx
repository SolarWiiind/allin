import { Modals } from "./Modal";
import style from "./section1.module.css";

const catalog = [
  {
    id: 1,
    img: "https://157008.lp.tobiz.net/img/400x560/1b02e22a43d8b716637ea6048cbaf5a6.png",
    title: "Цепочка 11745704",
    infoShort: "Подвеска с барочным жемчугом на цепочке из ювелирного сплава в позолоте, барочный жемчуг преображает и уносит.",
    infoFull: "Подвеска с барочным жемчугом на цепочке из ювелирного сплава в позолоте, барочный жемчуг преображает и уносит. А цепочки в позолоте дополняют, играют на контрасте, привнося современность и особенный стиль. Цепи из ювелирного сплава в гальваническом покрытии золотом. Гипоаллергенная фурнитура.",
    price: "1990.00 руб.",
    bag: "В корзину",
    home: "Главная",
    catalog: "Каталог товаров",
    products: "Цепочки и колье",
  },
  {
    id: 2,
    img: "https://157008.lp.tobiz.net/img/400x560/785023265acd7daf45d61f6ba5e8cb78.png",
    title: "Брошь 8549520",
    infoShort: "Оригинальная брошь, по невероятно приятной цене, размер 8х4 см, вес броши 15 гр.",
    infoFull: "Оригинальная брошь, по невероятно приятной цене, размер 8х4 см, вес броши 15 гр. А броши в позолоте дополняют, играют на контрасте, привнося современность и особенный стиль. Брошь из ювелирного сплава в гальваническом покрытии золотом. Гипоаллергенная фурнитура.",
    price: "790.00 руб.",
    bag: "В корзину",
    home: "Главная",
    catalog: "Каталог товаров",
    products: "Броши",
  },
  {
    id: 3,
    img: "https://157008.lp.tobiz.net/img/400x560/0ed2979c0437fba212a0b4ec1ed2dc19.png",
    title: "Браслет-цепочка 11745698",
    infoShort: "Ювелирный сплав в гальваническом покрытии золотом, барочный жемчуг и гипоаллергенная фурнитура высокого качества.",
    infoFull: "Ювелирный сплав в гальваническом покрытии золотом, барочный жемчуг и гипоаллергенная фурнитура высокого качества. А браслеты в позолоте дополняют, играют на контрасте, привнося современность и особенный стиль. Браслеты из ювелирного сплава в гальваническом покрытии золотом. Гипоаллергенная фурнитура.",
    price: "1810.00 руб.",
    bag: "В корзину",
    home: "Главная",
    catalog: "Каталог товаров",
    products: "Браслеты",
  },
];

// let linkmap = cataloglink.map( (el) => {
//   return(

//   )
// })
export let Section1 = () => {
  return (
    <div className={style.section}>
      <div className={style.main}>
        <div className={style.div1}>
          <p className={style.p1}>Популярные товары</p>
          <p className={style.p2}>Что чаще всего покупают наши клиенты?</p>
        </div>
        <div className={style.div2}>
          <div className={style.div21}>
            <p className={style.p21}>Популярные товары</p>
            <p className={style.p21}>Браслеты</p>
            <p className={style.p21}>Серьги</p>
            <p className={style.p21}>Цепочки и колье</p>
            <p className={style.p21}>Броши</p>
          </div>
          <div className={style.div22}>
            {catalog.map((element) => {
              return (
                <div className={style.div22map} key={element.id}>
                  <Modals
                    img={element.img}
                    title={element.title}
                    home={element.home}
                    catalog={element.catalog}
                    products={element.products}
                    price={element.price}
                    bag={element.bag}
                    infoShort={element.infoShort}
                    infoFull={element.infoFull}
                  />
                  {/* <img src={element.img} alt="" className={style.img} /> */}
                  <p className={style.title}>{element.title}</p>
                  <p className={style.info}>{element.infoShort}</p>
                  {/* //slice */}
                  <p className={style.price}>{element.price}</p>
                  <button className={style.btn}>{element.bag}</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
