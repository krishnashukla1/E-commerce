import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the css file.

function PataApp() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        setCartVisible(true);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
        if (cart.length === 1) {
            setCartVisible(false);
        }
    };

    const changeQuantity = (productId, change) => {
        setCart(cart.map(item => item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + change) } : item));
    };

    const calculateTotal = () => {
        const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subtotal * 0.1;
        const total = subtotal + tax;
        return { subtotal, tax, total };
    };

    return (
        <div>
            <header className="section-navbar">
                <div className="container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7kXzZIoO3KpgVP0uohf2pSvDEJBhMziWyw&s" alt="Logo" />
                    <nav className="navbar">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Cart</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <button id="cartValue">Cart: {cart.reduce((acc, item) => acc + item.quantity, 0)}</button>
                </div>
            </header>
            <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/news14399.jpg" height="400" width="100%" alt="Patanjali Image" />
            <main className="section-hero">
                <div className="container grid grid-two--cols">
                    <div className="section-hero--content">
                        <p className="hero-subheading">New Arrivals</p>
                        <h1 className="hero-heading">Shop the latest trends</h1>
                        <p className="hero-para">Discover our new collection and find your perfect style.</p>
                        <button className="hero-btn"><a href="#">Shop Now</a></button>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1696038172">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
            </main>
            <section className="section-products">
                <div className="container">
                    <h2>Our Products</h2>
                    <div id="productContainer">
                        {products.map(product => (
                            <div key={product.id} className="cards">
                                <img src={product.image} alt={product.name} className="productImage" />
                                <div className="information">
                                    <h2 style={{ color: 'black' }}>{product.name}</h2>
                                    <p className="productDescription" style={{ color: 'black' }}>{product.description}</p>
                                    <div className="productPriceElement">
                                        <p className="productProperty" style={{ color: 'black' }}>Price:</p>
                                        <p className="productPrice" style={{ color: 'black' }}>₹{product.price.toFixed(2)}</p>
                                    </div>
                                    <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {cartVisible && (
                <section id="productCartContainer" className="container">
                    <h2>Shopping Cart</h2>
                    {cart.map(item => (
                        <div key={item.id} className="cards">
                            <div className="card">
                                <img src={item.image} alt={item.name} className="productImage" />
                                <h2 className="productName">{item.name}</h2>
                                <p className="productPrice">₹{item.price.toFixed(2)}</p>
                                <div className="stockElement">
                                    <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                                    <p className="productQuantity">{item.quantity}</p>
                                    <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                                </div>
                                <p className="productTotal">₹{(item.price * item.quantity).toFixed(2)}</p>
                                <button className="remove-to-cart-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="productCartTotalElem">
                        <div className="productCartTotalElement">
                            <div className="productOrderTotal">
                                <div><p>Subtotal:</p><p className="productSubTotal">₹{calculateTotal().subtotal.toFixed(2)}</p></div>
                                <div><p>Tax:</p><p className="productTax">₹{calculateTotal().tax.toFixed(2)}</p></div>
                                <div><p>Total:</p><p className="productFinalTotal">₹{calculateTotal().total.toFixed(2)}</p></div>
                            </div>
                        </div>
                    </div>
                    {cart.length > 0 && <button className="purchase-button" onClick={() => { alert('Purchase Successful!'); setCart([]); setCartVisible(false); }}>Click to Purchase</button>}
                </section>
            )}



            HTML

            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <img src="https://media.licdn.com/dms/image/v2/C5612AQHuGHiDW6_slg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1564593346423?e=2147483647&v=beta&t=Zb-c85aNYw0WraVjVMLEXt2EtcGGD-B1Ny8z0kmMhaU" alt="Patanjali Logo" class="footer-logo" />
                        <p class="footer-description">Your trusted source for authentic Ayurvedic and natural products. Experience the power of nature with Patanjali.</p>
                        <div class="footer-social">
                            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h4 class="footer-title">Quick Links</h4>
                        <ul class="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Products</a></li>
                            <li><a href="#">Health Tips</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4 class="footer-title">Customer Support</h4>
                        <ul class="footer-links">
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Shipping & Delivery</a></li>
                            <li><a href="#">Returns & Refunds</a></li>
                            <li><a href="#">Track Your Order</a></li>
                            <li><a href="#">Help Center</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4 class="footer-title">Subscribe to Our Newsletter</h4>
                        <p class="footer-subscribe-text">Stay updated with the latest news, offers, and health tips.</p>
                        <div class="footer-subscribe">
                            <input type="email" placeholder="Enter your email" class="footer-email" />
                            <button class="footer-subscribe-button">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 Patanjali Ayurved Limited. All Rights Reserved. Designed by Krishna Shukla.</p>
                </div>
            </footer>


        </div>
    );
}

export default PataApp;

