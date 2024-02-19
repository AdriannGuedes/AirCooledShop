import React, { useContext } from "react";
import "./cartItem.css";
import propTypes from "prop-types";

import { BsCartDashFill } from "react-icons/bs";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/appContext";

function CartItem({data}) {

    const {cartItems, setCartItems} = useContext(AppContext);
    const {id, thumbnail, title, price} = data;
    
    const handleRemoveItem = () => {
        const updateItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updateItems);
    };
    
    return (
        <section className="cart-item">
            <img
                src={thumbnail}
                alt="imagem do produto"
                className="car-item-img"
            />

            <div className="car-item-context">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>

                <button
                    type="button"
                    className="buttom-remove-item"
                    onClick={handleRemoveItem}
                >
                    <BsCartDashFill /> 
                </button>
            </div>
        </section>

    );
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}.isRequired