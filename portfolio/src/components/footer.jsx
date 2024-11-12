import React from  'react'
import { FaGithub} from 'react-icons/fa'
import '../styles/footer.css'

function Footer() {
    return (
        <footer className= "footer" >
            <div className= "footer-content">
                <ul className= "footer-links">
                    <a href="https://github.com/soibun-sol" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="footer-icon" />
                    </a>
                </ul>
            </div>
            <p className= "footer-text">&copy; 2024 Keegan Hinton. All rights reserved.</p>
        </footer>
    );
}

export default Footer;