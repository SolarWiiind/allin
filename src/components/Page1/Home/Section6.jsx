import style from "./section6.module.css";

const imgs = [
  {id: 1, url: "https://157008.lp.tobiz.net/img/600x450/31c77c776af29a7aff779585e2c6b99e.jpg"},
  {id: 2, url: "https://157008.lp.tobiz.net/img/600x450/6f7b75401d1079d66758a47ced425c22.jpg"},
  {id: 3, url: "https://157008.lp.tobiz.net/img/600x450/1375724c4e85e5db0addd35029d5168b.jpg"},
  {id: 4, url: "https://157008.lp.tobiz.net/img/600x450/82ece77cb7b329b12513225f65413ea6.jpg"},
  {id: 5, url: "https://157008.lp.tobiz.net/img/600x450/a5140991afa5347028f16f5473cb2c97.jpg"},
  {id: 6, url: "https://157008.lp.tobiz.net/img/600x450/ae3839439e24ee32e9c5ba7b6bfffe05.jpg"},
]
export let Section6 = () => {
  return (
    <div className={style.section}>
      <div className={style.main}>
        <div className={style.div1}>
          <p className={style.p1}>Фотогалерея магазина</p>
          <p className={style.p2}>Больше, чем просто продукция. Мы творим для людей!</p>
        </div>
        <div className={style.div2}>
          {imgs.map( (el) => {
            return (
              <div className={style.imgs}>
               <img src={el.url}  className={style.img}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};
