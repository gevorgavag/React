import React from 'react';
import s from "./css/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profiles</a>
            </div>
            <div className={ `${s.item} ${s.active}` }>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;