import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./searchBar.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/appContext";

function SearchBar() {

    const { setProducts, setLoading } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);

        const products = await fetchProducts(searchValue);
        setProducts(products);
        setLoading(false);
        setSearchValue("");
    };

    return (
        <form className="search-Bar" onSubmit={handleSearch}>
            <input
                type="search"
                value={searchValue}
                placeholder="Buscar Produtos"
                className="search_input"
                onChange={({ target }) => setSearchValue(target.value)}
                required
            />
            <button type="submit" className="search_button">
                <BsSearch />
            </button>
        </form>
    );
}

export default SearchBar;