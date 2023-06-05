import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1 className='titulo'>TechHub</h1>
            <nav>
                <ul>
                    <li>Arna tu PC</li>
                    <li>Notebooks</li>
                    <li>Placas de Video</li>
                    <li>Monitores</li>
                    <li>Perifericos</li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar