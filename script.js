document.addEventListener('DOMContentLoaded', async function() {
    // Load book data from data.json
    let books = [];

    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        books = data.books;
    } catch (error) {
        console.error('Error loading book data:', error);
        // Fallback to empty array if data can't be loaded
        books = [];
        return;
    }

    // DOM elements
    const carouselEl = document.querySelector('.book-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const bookTitleEl = document.getElementById('book-title');
    const bookSubtitleEl = document.getElementById('book-subtitle');
    const bookSummaryEl = document.getElementById('book-summary');

    // Carousel state
    let currentAngle = 0;
    let currentBook = 0;
    const totalBooks = books.length;
    const angleStep = 360 / totalBooks;
    // Adjust radius based on screen size for better mobile experience
    const radius = window.innerWidth < 768 ? 300 : 400; // Distance from center

    // Auto-scroll state
    let autoScrollTimer = null;
    let inactivityTimer = null;
    let isAutoScrolling = false;
    const INACTIVITY_DELAY = 10000; // 10 seconds
    const AUTO_SCROLL_INTERVAL = 10000; // 10 seconds between scrolls

    // Create book elements and position them in a circle
    function setupCarousel() {
        books.forEach((book, index) => {
            // Create book element
            const bookEl = document.createElement('div');
            bookEl.className = 'book';
            bookEl.setAttribute('data-index', index);

            // Position in 3D space
            const angle = index * angleStep;
            const x = radius * Math.sin(angle * Math.PI / 180);
            const z = radius * Math.cos(angle * Math.PI / 180);

            bookEl.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`;

            // Create and add cover image
            const img = document.createElement('img');
            img.src = book.coverImage;
            img.alt = book.title;
            img.loading = "lazy";
            bookEl.appendChild(img);

            // Add click event
            bookEl.addEventListener('click', () => selectBook(index));

            // Add to carousel
            carouselEl.appendChild(bookEl);
        });

        // Set initial book info
        updateBookInfo(0);

        // Add magical particles animation
        addMagicalParticles();
    }

    // Rotate carousel to show selected book
    function rotateCarousel(targetIndex) {
        currentBook = targetIndex;
        currentAngle = -targetIndex * angleStep;

        const books = document.querySelectorAll('.book');
        books.forEach((book, index) => {
            const angle = index * angleStep + currentAngle;
            const x = radius * Math.sin(angle * Math.PI / 180);
            const z = radius * Math.cos(angle * Math.PI / 180);

            book.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${angle}deg)`;

            // Add 'active' class to current book, remove from others
            if (index === targetIndex) {
                book.classList.add('active');
                // Forward book slightly
                book.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z + 50}px) rotateY(${angle}deg) scale(1.1)`;
            } else {
                book.classList.remove('active');
            }
        });

        // Update book information
        updateBookInfo(targetIndex);
    }

    // Handle user selecting a book
    function selectBook(index) {
        rotateCarousel(index);
        resetAutoScrollTimer(); // Reset timer on user interaction
    }

    // Auto-scroll functions
    function startAutoScroll() {
        if (isAutoScrolling) return;

        isAutoScrolling = true;
        autoScrollTimer = setInterval(() => {
            const nextIndex = (currentBook + 1) % totalBooks;
            rotateCarousel(nextIndex);
        }, AUTO_SCROLL_INTERVAL);
    }

    function stopAutoScroll() {
        if (autoScrollTimer) {
            clearInterval(autoScrollTimer);
            autoScrollTimer = null;
        }
        isAutoScrolling = false;
    }

    function resetAutoScrollTimer() {
        // Clear existing timers
        stopAutoScroll();
        if (inactivityTimer) {
            clearTimeout(inactivityTimer);
        }

        // Start new inactivity timer
        inactivityTimer = setTimeout(() => {
            startAutoScroll();
        }, INACTIVITY_DELAY);
    }

    // User activity detection
    function handleUserActivity() {
        resetAutoScrollTimer();
    }

    // Update book information panel
    function updateBookInfo(index) {
        const book = books[index];

        // Create a link element for the title
        bookTitleEl.innerHTML = '';
        const titleLink = document.createElement('a');
        titleLink.textContent = book.title;
        titleLink.href = book.url;
        titleLink.target = "_blank"; // Open in new tab
        titleLink.classList.add('book-title-link');
        bookTitleEl.appendChild(titleLink);

        bookSubtitleEl.textContent = book.subtitle || '';
        bookSummaryEl.textContent = book.summary;

        // Add a magical reveal animation
        bookTitleEl.style.animation = 'none';
        bookSubtitleEl.style.animation = 'none';
        bookSummaryEl.style.animation = 'none';

        setTimeout(() => {
            bookTitleEl.style.animation = 'fadeIn 0.8s forwards';
            bookSubtitleEl.style.animation = 'fadeIn 0.8s 0.2s forwards';
            bookSummaryEl.style.animation = 'fadeIn 0.8s 0.4s forwards';
        }, 50);
    }

    // Add floating magical particles
    function addMagicalParticles() {
        const particlesContainer = document.querySelector('.magical-particles');

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = `${Math.random() * 8 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.background = `rgba(${146 + Math.random() * 50}, ${116 + Math.random() * 50}, ${206 + Math.random() * 50}, ${Math.random() * 0.5 + 0.2})`;
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.boxShadow = '0 0 10px rgba(146, 116, 206, 0.5)';

            // Random animation
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;

            particle.style.animation = `float ${duration}s ${delay}s infinite linear alternate`;

            // Append to document to ensure particles are created
            particlesContainer.appendChild(particle);
        }
    }

    // Make carousel more touch-friendly
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left, next book
            const nextIndex = (currentBook + 1) % totalBooks;
            rotateCarousel(nextIndex);
        }
        if (touchEndX > touchStartX) {
            // Swipe right, previous book
            const prevIndex = (currentBook - 1 + totalBooks) % totalBooks;
            rotateCarousel(prevIndex);
        }
    }

    // Initialize
    setupCarousel();
    // Ensure first book is properly focused on load
    rotateCarousel(0);

    // Start the auto-scroll timer
    resetAutoScrollTimer();

    // Event listeners for carousel controls
    prevBtn.addEventListener('click', () => {
        const prevIndex = (currentBook - 1 + totalBooks) % totalBooks;
        rotateCarousel(prevIndex);
        resetAutoScrollTimer(); // Reset timer on user interaction
    });

    nextBtn.addEventListener('click', () => {
        const nextIndex = (currentBook + 1) % totalBooks;
        rotateCarousel(nextIndex);
        resetAutoScrollTimer(); // Reset timer on user interaction
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const prevIndex = (currentBook - 1 + totalBooks) % totalBooks;
            rotateCarousel(prevIndex);
            resetAutoScrollTimer(); // Reset timer on user interaction
        } else if (e.key === 'ArrowRight') {
            const nextIndex = (currentBook + 1) % totalBooks;
            rotateCarousel(nextIndex);
            resetAutoScrollTimer(); // Reset timer on user interaction
        }
    });

    // Add user activity detection for mouse movement and clicks
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('click', handleUserActivity);
    document.addEventListener('scroll', handleUserActivity);
    document.addEventListener('touchstart', handleUserActivity);
    document.addEventListener('touchmove', handleUserActivity);

    // Add a bit of magic - subtle random rotations
    setInterval(() => {
        document.querySelectorAll('.book').forEach(book => {
            const currentTransform = book.style.transform;
            // Add a small random rotation to give a floating effect
            const randomRotation = (Math.random() * 0.5 - 0.25);
            book.style.transform = currentTransform + ` rotateX(${randomRotation}deg) rotateZ(${randomRotation}deg)`;
        });
    }, 2000);

    // Add CSS animation for fade effects
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        #book-title, #book-subtitle, #book-summary {
            opacity: 0;
            animation-fill-mode: forwards;
        }

        .book.active {
            z-index: 10;
        }

        .book-title-link {
            color: #f0d086;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            cursor: pointer;
            display: inline-block;
            padding: 2px 4px;
            border-radius: 4px;
        }

        .book-title-link:hover {
            color: #fff;
            background-color: rgba(146, 116, 206, 0.4);
            text-shadow: 0 0 8px rgba(255,255,255,0.6);
            transform: scale(1.03);
        }

        .book-title-link:after {
            content: '🔗';
            opacity: 0.7;
            font-size: 0.7em;
            margin-left: 5px;
            vertical-align: super;
        }

        .book-title-link:hover:after {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});
