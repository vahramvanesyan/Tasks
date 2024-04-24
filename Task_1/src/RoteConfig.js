import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ProductList } from "./components/ProductList";
import { Cart } from './components/Cart';
import { Add } from "./Add";
import { useContext } from "react";
import { ProductContext } from "./Context";

export const RoteConfig = () => {
const{isMenuOpen,toggleMenu,}=useContext(ProductContext)
   

    return (
        <BrowserRouter>
            <div className="header">
                <div className="logo">Products</div>
                <div className="mobile-menu" onClick={toggleMenu}>
                    <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className={`navigation ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/basket" className="nav-item">Cart</Link>
                    <Link to="/Add" className="nav-item">Add</Link>
                </div>
            </div>
            <Routes>
                <Route path="Add" element={<Add />} />
                <Route path="/" element={<ProductList />} />
                <Route path="/basket" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}
