import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className='all-header'>
            <h1 className='title-header'>Blog</h1>
            <nav className='nav-header' aria-label='Barre de navigation principale'>
                <ul className='ul-header'>
                    <li><Link to="/" className='a-header'>Accueil</Link></li>
                    <li><Link to="/new/articles" className='a-header'>Ajouter un article</Link></li>
                    <li><Link to="/contact" className='a-header'>Contact</Link></li>
                    <li><Link to="/connexion" className='a-header'>Me connecter</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;