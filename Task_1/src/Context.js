import React, { useEffect, useState } from "react"
export const ProductContext = React.createContext()
export const ProductProvaider = (props) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const [image, setImage] = useState(null)
    const [total, setTotal] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error))
    }, [])

    const filteredProducts = products.filter(product =>
        product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleImageChange = e => {
        const file = e.target.files[0]
        setImage(file)
    }

    useEffect(() => {
        if (cart.length) {
            setTotal(cart.reduce((a, b) => a + b.count * b.price, 0))
        } else {
            setTotal(0)
        }
    }, [cart])

    const moveToCart = prod => {
        let found = cart.find(x => x.id === prod.id);
        if (found) {
            found.count++;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...prod, count: 1, image: prod.image }])
        }
        setIsAddedToCart(true);
        setTimeout(() => {
            setIsAddedToCart(false);
        }, 2000);
    }

    const countUp = prod => {
        setCart([...cart], { ...prod.count++ })
    }

    const countDown = prod => {
        if (prod.count > 1) {
            prod.count--
            setCart([...cart])
        }
    }

    const Delete = prod => {
        setCart(cart.filter(a => a !== prod))
    }

    return <ProductContext.Provider value={{ isMenuOpen, toggleMenu, searchQuery, setSearchQuery, filteredProducts, isAddedToCart, setIsAddedToCart, products, setProducts, cart, setCart, moveToCart, total, countUp, countDown, Delete, image, setImage, handleImageChange }}>
        {props.children}
    </ProductContext.Provider>
}





