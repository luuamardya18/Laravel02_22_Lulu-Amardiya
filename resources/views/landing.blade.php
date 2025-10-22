<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SUSHI - Modern Japanese Cuisine</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body>
    <!-- Header -->
    <header id="header">
        <a href="#" class="logo">SUSHI<span>.</span></a>
        <div class="hamburger">
            <i class="fas fa-bars"></i>
        </div>
        <nav>
            <ul>
                <li><a href="#home" class="nav-link active">Home</a></li>
                <li><a href="#menu" class="nav-link">Menu</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
                <li>
                    <div class="cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">0</span>
                    </div>
                </li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Enjoy Delicious </h1>
            <h1><span style="color: var(--primary);">Sushi</span> Food</h1>
            <p>Experience the authentic taste of Japan with our carefully crafted sushi made from the freshest
                ingredients by our master chefs.</p>
            <a href="#menu" class="btn">Order Now</a>
        </div>
        <a href="#menu" class="scroll-down">
            <i class="fas fa-chevron-down"></i>
        </a>
    </section>

    <!-- Menu Section -->
    <section class="section" id="menu">
        <div class="section-title">
            <h2>Our Special Menu</h2>
            <p>Discover our special selection of sushi</p>
        </div>
        <div class="menu-grid">
            <!-- Menu items will be added dynamically with JavaScript -->
        </div>
    </section>

    <!-- About Section -->
    <section class="section about" id="about">
        <div class="about-container">
            <div class="about-content">
                <h2>We Provide Healthy Food</h2>
                <p>Founded in 2025, SUSHI. has been serving authentic Japanese cuisine with a modern twist. Our chefs
                    combine traditional techniques with innovative approaches to create unforgettable dining
                    experiences.</p>
                <p>We source only the freshest ingredients, including sustainably caught seafood and organic produce, to
                    ensure every dish meets our high standards of quality and taste.</p>
                <a href="#menu" class="btn">Explore Menu</a>
            </div>
            <div class="about-img">
                <img
                    src="https://plus.unsplash.com/premium_photo-1664298894960-205f1f7af9ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            </div>
        </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section">
        <div class="section-title">
            <h2>Why Choose Us</h2>
            <p>What makes our sushi restaurant stand out from the rest</p>
        </div>
        <div class="features">
            <div class="feature">
                <div class="feature-icon">
                    <i class="fas fa-fish"></i>
                </div>
                <h3>Fresh Ingredients</h3>
                <p>We use only the freshest ingredients sourced daily from trusted suppliers to ensure the highest
                    quality sushi.</p>
            </div>
            <div class="feature">
                <div class="feature-icon">
                    <i class="fas fa-tags"></i>
                </div>
                <h3>Affordable Prices</h3>
                <p>Enjoy premium quality sushi at reasonable prices that offer great value for your dining experience.
                </p>
            </div>
            <div class="feature">
                <div class="feature-icon">
                    <i class="fas fa-truck"></i>
                </div>
                <h3>Fast Delivery</h3>
                <p>Our efficient delivery service ensures your sushi arrives fresh and delicious right at your doorstep.
                </p>
            </div>
            <div class="feature">
                <div class="feature-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <h3>Halal Certified</h3>
                <p>All our menu items are Halal certified, ensuring peace of mind for our valued customers.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="footer-container">
            <div class="footer-about">
                <div class="footer-logo">SUSHI<span>.</span></div>
                <p>Bringing authentic Japanese flavors to your table with our carefully crafted sushi and warm
                    hospitality.</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div class="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h3>Menu</h3>
                <ul>
                    <li><a href="#menu">Sushi Rolls</a></li>
                    <li><a href="#menu">Nigiri</a></li>
                    <li><a href="#menu">Sashimi</a></li>
                    <li><a href="#menu">Special Combos</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h3>Contact Us</h3>
                <p><i class="fas fa-map-marker-alt"></i> Jl. Sushi No. 123, Jakarta</p>
                <p><i class="fas fa-phone"></i> +62 858-7832-5997</p>
                <p><i class="fas fa-envelope"></i> info@sushi.com</p>
                <p><i class="fas fa-clock"></i> Mon-Sun: 10:00 - 22:00</p>
            </div>
        </div>
        <div class="copyright">
            &copy; 2025 SUSHI. All Rights Reserved.
        </div>
    </footer>

    <!-- Cart Modal -->
    <div class="cart-modal">
        <div class="cart-header">
            <h3>Your Order</h3>
            <div class="close-cart">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="cart-items">
            <!-- Cart items will be added dynamically with JavaScript -->
        </div>
        <div class="cart-total">
            <span>Total:</span>
            <span class="total-price">Rp 0</span>
        </div>
        <button class="btn checkout-btn">Proceed to Checkout</button>
    </div>

    <!-- Checkout Modal -->
    <div class="checkout-modal">
        <div class="checkout-container">
            <div class="close-checkout">
                <i class="fas fa-times"></i>
            </div>
            <h3>Complete Your Order</h3>
            <form id="checkout-form">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="address">Delivery Address</label>
                    <input type="text" id="address" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" required>
                </div>
                <div class="form-group">
                    <label for="notes">Additional Notes</label>
                    <textarea id="notes"></textarea>
                </div>
                <button type="submit" class="submit-order">Place Order</button>
            </form>
        </div>
    </div>

    <div class="notification" id="notification">
        <i class="fas fa-check-circle"></i>
        <span id="notification-text">Item added to cart</span>
    </div>
    <script src="{{ asset('js/script.js') }}"></script>
</body>

</html>