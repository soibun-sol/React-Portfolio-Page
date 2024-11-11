import React from  'react'
import { FaGithub} from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <div>
                <ul>
                    <li>
                        <a href="https://github.com/soibun-sol" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className="footer-icon" />
                        </a>
                    </li>
                </ul>
            </div>
            <p>&copy; 2024 Keegan Hinton. All rights reserved.</p>
        </footer>
    );
}

export default Footer;