// import { createRoot } from 'react-dom/client';
import './Header.css';

function Header() {
// dynamique c'est ici toujours en haut de return 

// template c'est la vue
    return (
        <header className='all-header'>
            <h1 className='title-header'>Titre</h1>
            <nav className='nav-header'>
                <ul  className='ul-header'> 
                <li><a href="#" className='a-header'>Accueil</a></li>
                <li><a href="#" className='a-header'>Articles</a></li>
                <li><a href="#" className='a-header'>Contact</a></li>
                <li><a href="#" className='a-header'>Me connecter</a></li>
                </ul>   
                {/* <button>Me connecter</button> */}
            </nav>
            {/* <h2>Bienvenue sur mon blog</h2> */}
        </header>   
    );
}
export default Header;