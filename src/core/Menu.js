import React from "react";
import "../App.css";
const Menu = () => (
<header className="navbar">
        <div className="menu-toggle" id="hamburger">
            <i className="fas fa-bars"></i>
        </div>
        <div className="overlay"></div>
        <div className="container">
            <nav>
                <h1 className="brand"><a href="index.html"></a></h1>
                <ul>
                    <li><a href="http://www.facebook.com/foqsh"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="http://www.github.com/hassanfouaad"><i class="fab fa-github"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>                    
                </ul>
            </nav>
        </div>
</header>
);

export default Menu;
