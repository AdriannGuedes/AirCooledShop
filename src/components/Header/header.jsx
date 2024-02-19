import React from "react";
import SearchBar from "../SearchBar/searchBar";

import "./header.css"
import CartButton from "../CartButton/cartButton";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1 className="title">AirCooledShop</h1>
                <SearchBar />
                <CartButton />
            </div>
        </header>
    );

}

export default Header;