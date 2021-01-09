import './styles.css';

import {ReactComponent as LinkedinIcon} from './linkedin.svg';

import {ReactComponent as GitHubIcon} from './github.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://github.com/bruno2026" target="_new">
                    <GitHubIcon />
                </a>

                <a href="https://www.linkedin.com/in/brunogomes2021/" target="_new">
                    <LinkedinIcon />
                </a>


                
            </div>
        </footer>
    )
}

export default Footer;