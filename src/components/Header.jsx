import styles from './Header.module.css';
import logo from '../assets/logo.png';

export function Header () {
    return (
        <div className={styles.header_container}>
            <img src={logo} alt="logo-LuzDeCristo"/>
            
            <nav>
                <a href="#">Jesus</a>
                <a href="#">Missa</a>
                <a href="#">Eucaristia</a>
                <a href="#">Santos</a>
                <a href="#">Sobre Nós</a>
            </nav>
        </div>
    )
}