import React, { useContext } from "react";
import { ProductContext } from "../Context";

export const Cart = () => {
    const { cart, total, countUp, countDown, Delete } = useContext(ProductContext)

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h3>Shopping Cart</h3>
                <div className="cart-header">Total: {total} $</div>
            </div>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.category}</td>
                            <td>{item.price} $</td>
                            <td>
                                <button className="action-btn" onClick={() => countDown(item)}>-</button>
                                <span>{item.count}</span>
                                <button className="action-btn" onClick={() => countUp(item)}>+</button>
                            </td>
                            <td>
                                <button className="delete-btn" onClick={() => Delete(item)}>Remove</button>
                            </td>
                            <td>
                                <img src={item.image} alt="Product" className="product-image" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}