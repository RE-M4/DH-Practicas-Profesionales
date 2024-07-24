import React from 'react';
import Nav from './Nav';

function Menu() {
    return (
        <>
            <header className="menu-wrap">
                <figure className="user">
                    <div className="user-avatar">
                        <img src="../img/logo-dh.png" alt="Logo Digital House"/>
                    </div>
                    <figcaption>
                        Digital House
                    </figcaption>
                </figure>
                <Nav />
            </header>
        </>
    );
}
export default Menu;
