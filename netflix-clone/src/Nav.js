import React, {useEffect, useState} from 'react'
import './nav.css';

function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);

            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`nav ${show && "navBlack"}`}>
            <img className="navLogo" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" />
            <img className="navIcon" src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" />
        </div>
    )
}

export default Nav
