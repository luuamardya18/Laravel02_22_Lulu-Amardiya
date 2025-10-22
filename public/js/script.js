        // Menu Data
        const menuItems = [
            {
                id: 1,
                name: "Salmon Nigiri",
                description: "Fresh salmon slices on pressed rice, a classic favorite.",
                price: 45000,
                image: "https://images.unsplash.com/photo-1563612116891-9b03e4bb9318?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id: 2,
                name: "Tuna Roll",
                description: "Premium tuna wrapped in seaweed and rice with cucumber.",
                price: 65000,
                image: "https://images.unsplash.com/photo-1676037150304-e4c4a1d585f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id: 3,
                name: "Dragon Roll",
                description: "Eel and cucumber inside, avocado and eel sauce on top.",
                price: 85000,
                image: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            },
            {
                id: 4,
                name: "California Roll",
                description: "Crab, avocado and cucumber wrapped in seaweed and rice.",
                price: 55000,
                image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id: 5,
                name: "Rainbow Roll",
                description: "California roll topped with assorted fish and avocado.",
                price: 135000,
                image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id: 6,
                name: "Spicy Tuna Roll",
                description: "Spicy tuna mixed with chili sauce, cucumber and scallions.",
                price: 60000,
                image: "https://images.unsplash.com/photo-1728691192936-096ed468762c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
             {
                id: 7,
                name: "Unagi Mix Roll",
                description: "Spicy tuna mixed with chili sauce, cucumber and scallions.",
                price: 135000,
                image: "https://images.unsplash.com/photo-1625938145312-c18f06f53be0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
             {
                id: 8,
                name: "Shrimp Roll",
                description: "Spicy tuna mixed with chili sauce, cucumber and scallions.",
                price: 55000,
                image: "https://images.unsplash.com/photo-1554502078-ef0fc409efce?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ];

        // Cart Data
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = 0;

        // DOM Elements
        const menuGrid = document.querySelector('.menu-grid');
        const cartIcon = document.querySelector('.cart-icon');
        const cartCount = document.querySelector('.cart-count');
        const cartModal = document.querySelector('.cart-modal');
        const closeCart = document.querySelector('.close-cart');
        const cartItemsContainer = document.querySelector('.cart-items');
        const totalPriceElement = document.querySelector('.total-price');
        const checkoutBtn = document.querySelector('.checkout-btn');
        const checkoutModal = document.querySelector('.checkout-modal');
        const closeCheckout = document.querySelector('.close-checkout');
        const checkoutForm = document.getElementById('checkout-form');
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('.nav-link');
        const header = document.getElementById('header');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderMenuItems();
            setupEventListeners();
            setupScrollAnimations();
            updateCartCount(); // Update cart count from localStorage
        });

        // Helper function to save cart to localStorage
        function saveCartToLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Render menu items
        function renderMenuItems() {
            menuGrid.innerHTML = '';
            menuItems.forEach((item, index) => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                menuItem.style.transitionDelay = `${index * 0.1}s`;
                menuItem.innerHTML = `
            <div class="menu-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-content">
                <h3>${item.name} <span>Rp ${item.price.toLocaleString()}</span></h3>
                <p>${item.description}</p>
                <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
            </div>
        `;
                menuGrid.appendChild(menuItem);
            });

            // Add animation to menu items when they come into view
            const menuItemsElements = document.querySelectorAll('.menu-item');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            menuItemsElements.forEach(item => {
                observer.observe(item);
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Add to cart buttons
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('add-to-cart')) {
                    const itemId = parseInt(e.target.getAttribute('data-id'));
                    addToCart(itemId);
                }
            });

            // Cart icon click
            cartIcon.addEventListener('click', toggleCart);

            // Close cart
            closeCart.addEventListener('click', toggleCart);

            // Checkout button
            checkoutBtn.addEventListener('click', () => {
                if (cart.length > 0) {
                    toggleCart();
                    checkoutModal.classList.add('active');
                }
            });

            // Close checkout modal
            closeCheckout.addEventListener('click', () => {
                checkoutModal.classList.remove('active');
            });

            // Submit checkout form
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                placeOrder();
            });

            // Hamburger menu
            hamburger.addEventListener('click', () => {
                nav.classList.toggle('active');
                hamburger.innerHTML = nav.classList.contains('active') ?
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            // Close nav when clicking on a link (for mobile)
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        nav.classList.remove('active');
                        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                });
            });

            // Close cart when clicking outside
            document.addEventListener('click', (e) => {
                const clickedInsideCart = cartModal.contains(e.target);
                const clickedCartIcon = cartIcon.contains(e.target);

                // Hanya close kalau klik di luar cart dan bukan cart icon
                if (!clickedInsideCart && !clickedCartIcon) {
                    cartModal.classList.remove('active');
                }
            });

            // Stop bubbling untuk semua tombol di dalam cart
            cartModal.addEventListener('click', (e) => {
                if (
                    e.target.classList.contains('quantity-btn') ||
                    e.target.classList.contains('remove-item') ||
                    e.target.closest('.quantity-btn') ||
                    e.target.closest('.remove-item')
                ) {
                    e.stopPropagation();
                }
            });

            // Close checkout modal when clicking outside
            document.addEventListener('click', (e) => {
                if (checkoutModal.classList.contains('active') &&
                    !document.querySelector('.checkout-container').contains(e.target) &&
                    e.target !== checkoutBtn) {
                    checkoutModal.classList.remove('active');
                }
            });

            // Scroll event for header
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // Setup scroll animations
        function setupScrollAnimations() {
            // Add active class to nav links based on scroll position
            const sections = document.querySelectorAll('section');

            window.addEventListener('scroll', () => {
                let current = '';

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;

                    if (pageYOffset >= sectionTop - 300) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        }

        // Toggle cart modal
        function toggleCart() {
            cartModal.classList.toggle('active');
            if (cartModal.classList.contains('active')) {
                renderCartItems();
            }
        }

        // Show notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notification-text');

            notificationText.textContent = message;
            notification.classList.add('show');

            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Add item to cart
        function addToCart(itemId) {
            const item = menuItems.find(i => i.id === itemId);
            const existingItem = cart.find(i => i.id === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
                showNotification(`${item.name} quantity updated in cart`);
            } else {
                cart.push({
                    ...item,
                    quantity: 1
                });
                showNotification(`${item.name} added to cart`);
            }

            updateCartCount();
            saveCartToLocalStorage();

            // Add animation to cart icon
            cartIcon.classList.add('animate');
            setTimeout(() => {
                cartIcon.classList.remove('animate');
            }, 500);
        }

        // Update cart count
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = count;
        }

        // Render cart items
        function renderCartItems() {
            cartItemsContainer.innerHTML = '';

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
                totalPriceElement.textContent = 'Rp 0';
                checkoutBtn.disabled = true;
                return;
            }

            checkoutBtn.disabled = false;
            totalPrice = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                totalPrice += itemTotal;

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <span class="cart-item-price">Rp ${item.price.toLocaleString()}</span>
                <div class="cart-item-actions">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <span class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        `;
                cartItemsContainer.appendChild(cartItem);
            });

            totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString()}`;

            // Add event listeners to quantity buttons
            document.querySelectorAll('.quantity-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const itemId = parseInt(btn.getAttribute('data-id'));
                    const isPlus = btn.classList.contains('plus');
                    updateCartItem(itemId, isPlus);
                });
            });

            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const itemId = parseInt(btn.getAttribute('data-id'));
                    removeCartItem(itemId);
                });
            });
        }

        // Update cart item quantity
        function updateCartItem(itemId, isPlus) {
            const item = cart.find(i => i.id === itemId);

            if (isPlus) {
                item.quantity += 1;
            } else {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    removeCartItem(itemId);
                    return;
                }
            }

            renderCartItems();
            updateCartCount();
            saveCartToLocalStorage();
        }

        // Remove item from cart
        function removeCartItem(itemId) {
            const item = cart.find(i => i.id === itemId);
            const itemName = item.name;
            cart = cart.filter(i => i.id !== itemId);
            showNotification(`${itemName} removed from cart`);

            // Jika modal terbuka dan cart kosong, tutup modal
            if (cart.length === 0 && cartModal.classList.contains('active')) {
                toggleCart();
            }

            // Update tampilan jika modal terbuka
            if (cartModal.classList.contains('active')) {
                renderCartItems();
            }
            updateCartCount();
            saveCartToLocalStorage();
        }

        // Place order
        function placeOrder() {
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            const phone = document.getElementById('phone').value;
            const notes = document.getElementById('notes').value;

            // Format order message for WhatsApp
            let message = `Halo SUSHI, saya ingin memesan:\n\n`;

            cart.forEach(item => {
                message += `${item.name} (${item.quantity}x) - Rp ${(item.price * item.quantity).toLocaleString()}\n`;
            });

            message += `\nTotal: Rp ${totalPrice.toLocaleString()}\n\n`;
            message += `Atas nama: ${name}\n`;
            message += `Alamat pengiriman: ${address}\n`;
            message += `Nomor HP: ${phone}\n`;

            if (notes) {
                message += `Catatan: ${notes}\n`;
            }

            message += `\nTerima kasih!`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);

            // Replace with your WhatsApp number
            const whatsappNumber = '6285878325997';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Reset form and cart
            checkoutForm.reset();
            checkoutModal.classList.remove('active');
            cart = [];
            updateCartCount();
            renderCartItems();
            saveCartToLocalStorage();
        }