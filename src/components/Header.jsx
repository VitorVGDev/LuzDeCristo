import styles from './Header.module.css';
import logo from '../assets/logo.svg';

export function Header () {
    return (
        <div className={styles.header_container}>
            <img src={logo} alt="logo-LuzDeCristo"/>
            
            <nav>
                <a href="#">Jesus</a>
                <a href="#">Missa</a>
                <a href="#">Eucaristia</a>
                <div className={styles.dropdown}>
                    <a href="#" className={styles.dropbtn}>Santos</a>
                    <div className={styles.dropdown_content}>
                        <a href="#">São Carlos Acutis</a>
                        <a href="#">São Bento</a>
                    </div>
                </div>
                <a href="">Sobre Nós</a>
            </nav>
        </div>
    )
}