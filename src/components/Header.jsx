import './Header.css';

function Header() {
// dynamique c'est ici toujours en haut de return 

// template c'est la vue
    return (
        <header className='all-header'>
            <h1 className='title-header'>Titre</h1>
            <nav className='nav-header' aria-label='Barre de navigation principale'>
                <ul  className='ul-header'> 
                <li><a href="#" className='a-header'>Accueil</a></li>
                <li><a href="#" className='a-header'>Articles</a></li>
                <li><a href="#" className='a-header'>Contact</a></li>
                </ul>
                <button className='button-header' type='button'>Me connecter</button>

            </nav>
        </header>   
    );
}
export default Header;