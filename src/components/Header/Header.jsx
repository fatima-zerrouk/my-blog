import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    // dynamique c'est ici toujours en haut de return 

    // template c'est la vue
    return (
        <header className='all-header'>
            <h1 className='title-header'>Titre</h1>
            <nav className='nav-header' aria-label='Barre de navigation principale'>
                <ul className='ul-header'>
                    <li><Link to="/" className='a-header'>Accueil</Link></li>
                    <li><Link to="/new/articles" className='a-header'>Ajouter un article</Link></li>
                    <li><Link to="/contact" className='a-header'>Contact</Link></li>
                    <li><Link to="/contact" className='a-header'>Me connecter</Link></li>

                </ul>
                {/* <button className='button-header' type='button'>Me connecter</button> */}

            </nav>
        </header>
    );
}
export default Header;