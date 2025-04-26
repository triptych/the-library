document.addEventListener('DOMContentLoaded', function() {
    // Book data from librarydata.md with URLs from BookList.md
    const books = [
        {
            title: "The Chaos Sword",
            author: "Andrew Wooldridge",
            coverImage: "./The Chaos Sword.jpg",
            url: "https://the-chaos-sword.puter.site/",
            summary: "\"The Chaos Sword\" follows the journey of Lyra Nightwind, a quiet village girl who unwillingly bonds with an ancient, sentient sword after pirates destroy her home. Their tumultuous relationship transforms both of them as Lyra learns to assert herself and the sword (Kais) discovers the power of compassion beyond killing."
        },
        {
            title: "The Librarian's Index",
            author: "Andrew Wooldridge",
            coverImage: "./The Librarian's Index.jpg",
            url: "https://librarians-index.puter.site/",
            summary: "When 26-year-old Mira Thornfield is mysteriously chosen as the next Head Librarian of the grand Everscript Library, she discovers this is no ordinary collection of books. The shelves rearrange themselves at night, books whisper their secrets, and the ancient magical Index has manifested as a handsome, slightly awkward young man who calls himself Paige."
        },
        {
            title: "Gears and Spirits",
            subtitle: "A Tinker's Tale",
            author: "Andrew Wooldridge",
            coverImage: "./Gears and Spirits.jpeg",
            url: "https://gears-and-spirits.puter.site/",
            summary: "In the charming seaside town of Saltwhisper Cove, where fishing boats bob gently in the harbor and seagulls sing with the morning tide, twenty-two-year-old Pippa Cogsworth arrives with her wagon full of peculiar tools and half-finished inventions."
        },
        {
            title: "The Dark Lord's Bed & Breakfast",
            author: "Andrew Wooldridge",
            coverImage: "./The Dark Lord's Bed & Breakfast.png",
            url: "https://dark-lord-bed-breakfast.puter.site/",
            summary: "When the infamous Dark Lord finds himself forced into early retirement, he converts his ominous fortress into a bed and breakfast. What follows is an unexpected journey as the former villain navigates the hospitality industry, deals with quirky guests, and perhaps discovers that providing comfort can be as satisfying as spreading fear."
        },
        {
            title: "A Witch on the Line",
            author: "Andrew Wooldridge",
            coverImage: "./A Witch.png",
            url: "https://a-witch-on-the-line.puter.site/",
            summary: "A thriller/urban fantasy novel about Thomas Walker, a devout Christian and widower, who discovers a mysterious cell phone at a yard sale that connects him to Willow Blackwood, a young witch held captive by a secret government organization called Project Grimoire."
        },
        {
            title: "The Enchanted Teahouse",
            author: "Andrew Wooldridge",
            coverImage: "./The Enchanted Teahouse.jpg",
            url: "https://enchanted-tea-house.puter.site/",
            summary: "A fantasy novel where tea brewing becomes a gateway to magic, family secrets are steeped in mystery, and a small town holds enchantments beyond imagination. Follow the journey through Misthollow as ancient traditions, magical brews, and unexpected alliances come together in a tale of discovery, courage, and the power of heritage."
        },
        {
            title: "The Magical Herbalist's Apprentice",
            author: "Andrew Wooldridge",
            coverImage: "./The Magical Herbalist's Apprentice.png",
            url: "https://magical-herbalists-apprentice.puter.site/",
            summary: "In the village of Haven's Root, nineteen-year-old Sage Hawthorn serves as apprentice to Mistress Vervain, the local herbalist. During a routine dawn gathering of herbs, Sage discovers she can hear plants speak - a gift that runs in her family but manifests differently for each generation."
        },
        {
            title: "Mistweaver",
            author: "Andrew Wooldridge",
            coverImage: "./Mistweaver.png",
            url: "https://mistweaver.puter.site/",
            summary: "When 30-year-old Mai Nguyen discovers an ancient box while diving near her coastal hometown, she accidentally releases the 22 Major Arcana tarot cards into the world—each a powerful magical entity with its own agenda. Saving only The High Priestess card, Mai discovers she has become a \"Mistweaver,\" someone who can harness the magic of these entities."
        },
        {
            title: "Mountain Odyssey",
            author: "Andrew Wooldridge",
            coverImage: "./Mountain Odyssey.png",
            url: "https://mountain-odyssey.puter.site/",
            summary: "In the treacherous peaks where magic flows like the mountain winds, two souls with opposing powers find themselves bound by fate and drawn together by an undeniable connection."
        },
        {
            title: "Reborn as a Boat",
            author: "Andrew Wooldridge",
            coverImage: "./Reborn as a Boat.jpg",
            url: "https://reborn-as-a-boat.puter.site/",
            summary: "A cozy fantasy tale of identity, friendship, and finding home in unexpected places. Elian awakens with no memory, finding themselves inexplicably embodied as a small, wooden sailing ship anchored in a secluded cove."
        },
        {
            title: "The Shrine Gentleman",
            author: "Andrew Wooldridge",
            coverImage: "./The Shrine Gentleman.jpg",
            url: "https://shrine-gentleman.puter.site/",
            summary: "In the mystical valley of Lunaria, where the silver light of the Moon Goddess Selene has blessed the land for centuries, a fateful mistake changes the course of destiny. Riven Blackthorn, a legendary hunter known for his unmatched skill and cold demeanor, accidentally kills Lyra, the revered Shrine Maiden, while pursuing a sacred stag through the forbidden forest."
        },
        {
            title: "Starlight Salvage",
            author: "Andrew Wooldridge",
            coverImage: "./Starlight Salvage.png",
            url: "https://starlight-salvage.puter.site/website/index.html",
            summary: "In the far reaches of the Cerulean Nebula, on the junk planet of Scrapheap, 23-year-old Eliza \"Tink\" Tinkerson spends her days sifting through mountains of discarded technology. Unlike the other salvagers who search for valuable parts to trade, Tink sees potential in every broken gadget and forgotten machine."
        },
        {
            title: "Stellar Tides",
            author: "Andrew Wooldridge",
            coverImage: "./Stellar Tides.png",
            url: "https://stellar-tides.puter.site/",
            summary: "Welcome to the world of Stellar Tides, a cozy space fantasy novel that blends magic and technology in a universe where floating islands drift through perpetual twilight skies streaked with aurora ribbons."
        },
        {
            title: "Suffer the Dragon",
            author: "Andrew Wooldridge",
            coverImage: "./Suffer the Dragon.jpg",
            url: "https://suffer-the-dragon.puter.site/website/",
            summary: "In a world where monster hunting is revered, sixteen-year-old Elian Wolfcrest is a disappointment to his legendary family. Unable to bring himself to harm magical creatures, he discovers his true calling when he accidentally heals a wounded dragon named Thorn—the same dragon his ancestor had chained centuries ago."
        },
        {
            title: "The Fallen Star",
            author: "Andrew Wooldridge",
            coverImage: "./The Fallen Star.png",
            url: "https://the-fallen-star.puter.site/",
            summary: "In a world dominated by dark magic and tyranny, a traveler from an advanced civilization crashes near a conquered kingdom after centuries in stasis. Armed with technology that rivals the most powerful magic, this morally ambiguous antihero assembles a team of outcasts and villains to overthrow the Dark Lord, pitting advanced science against corrupt sorcery in a desolate landscape where the line between savior and conqueror grows increasingly thin."
        },
        {
            title: "The Sigil",
            author: "Andrew Wooldridge",
            coverImage: "./The Sigil.jpg",
            url: "https://the-sigil.puter.site/",
            summary: "In a multiverse where technology and magic are indistinguishable, Dr. Marcus Vega is chosen by a mysterious entity known as the Sigil to captain an extraordinary vessel."
        },
        {
            title: "Nine Lives: A Servant of Anubis",
            author: "Andrew Wooldridge",
            coverImage: "./Nine Lives.jpg",
            url: "https://nine-lives.puter.site/",
            summary: "Jake Harlow, a cynical but brilliant private detective in Boston, specializes in finding people who don't want to be found. When his investigation into missing Egyptian artifacts leads to his own murder, Jake awakens to find himself bound as a servant to Anubis, the Egyptian god of death—who manifests as a powerful, supernatural cat entity."
        },
        {
            title: "Bards of Discord",
            author: "Andrew Wooldridge",
            coverImage: "./Bards of Discord.jpg",
            url: "https://bards-of-discord.puter.site/website/index.html",
            summary: "A fantasy novel that explores the power of music in a world where melody and harmony can shape reality. Follow a group of misfit musicians who discover they can channel ancient magic through their modern instruments, leading to an epic confrontation between the forces of creation and destruction."
        }
    ];

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

    // Event listeners for carousel controls
    prevBtn.addEventListener('click', () => {
        const prevIndex = (currentBook - 1 + totalBooks) % totalBooks;
        rotateCarousel(prevIndex);
    });

    nextBtn.addEventListener('click', () => {
        const nextIndex = (currentBook + 1) % totalBooks;
        rotateCarousel(nextIndex);
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const prevIndex = (currentBook - 1 + totalBooks) % totalBooks;
            rotateCarousel(prevIndex);
        } else if (e.key === 'ArrowRight') {
            const nextIndex = (currentBook + 1) % totalBooks;
            rotateCarousel(nextIndex);
        }
    });

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
