import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        OurHostingMerge &#937;
                        
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"} >
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Nicoperez12' className='nav-links' onClick={closeMobileMenu}>
                                Nicoperez12
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/TTrincado' className='nav-links' onClick={closeMobileMenu}>
                                TTrincado
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Projects' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>

                    </ul>
                    {button && <Button buttonLink= '/Projects' buttonStyle='btn-outline'>Projects</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
