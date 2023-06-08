import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Reborn Games</h1>

        <nav>
            <ul>
                <li>Inicio</li>
                <li>Categoria</li>
                <li>Plataforma</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar