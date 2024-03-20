import style from './Hero.module.css'
import img from './img/astronautas.png'


function Hero () {
    return (
        <main className='container'>
            <div className={style.columnLeft}>
              <h1 className={style.mainTitle}><span>404</span> 404 Lost in space</h1>
              <p className={style.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                cupiditate a alias omnis pariatur tempore necessitatibus suscipit
                voluptatem modi! Ipsam.
              </p>
              <div className={style.btnList}>
                <a className={style.btn} href="/">Go home</a>
                <a className={style.btn + ' ' +style.btnWhite}  href="/">Back</a>
              </div>
            </div>
            <div className={style.columnRight}>
              <img
                className={style.mainImg}
                src={img}
                alt="Astronautas raso zinute namo, nes isskrydo i kosmosa"
              />
            </div>
        </main>
    )
}

export { Hero };