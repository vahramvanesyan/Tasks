import React, { useContext } from "react";
import { ProductContext } from "../Context";

export const ProductList = () => {
    const { moveToCart, isAddedToCart, searchQuery, setSearchQuery, filteredProducts } = useContext(ProductContext)

    return (
        <div>
            <input
                type="text"
                placeholder="Search by category..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="form-control my-3"
            />
            {isAddedToCart && (
                <div className="alert">Product has been added to cart!</div>
            )}
            <div className="grid-container">
                {filteredProducts.map(elm => (
                    <div key={elm.id} className="card">
                        <img src={elm.image} alt="Product" className="product-image" />
                        <p className="product-category">{elm.category}</p>
                        <div className="card-content">
                            <p>{elm.title}</p>
                            <p className="product-price">{elm.price} USD</p>
                        </div>
                        <button className="button" onClick={() => moveToCart(elm)}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
