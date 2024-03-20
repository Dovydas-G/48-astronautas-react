import style from './Header.module.css'

function Header() {
    return (
        <header className='container'>
            <p className={style.logoP}>Clay</p>
            <nav className={style.mainNav}>
              <a className={style.navLink} href="/">About</a>
              <a className={style.navLink} href="/">Portfolio</a>
              <a className={style.navLink} href="/">Job</a>
              <a className={style.navLink} href="/">Contact</a>
            </nav>
        </header>
    )
}


export { Header }