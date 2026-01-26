# The Library - Andrew Wooldridge Author Portfolio

A magical 3D carousel showcasing the fantasy novels of Andrew Wooldridge. This interactive portfolio features a rotating book display with automated navigation and detailed book information.

![Library Screenshot](https://via.placeholder.com/800x400/3a2a50/f0d086?text=The+Library+Portfolio)

## 🌟 Features

- **3D Interactive Carousel** - Books arranged in a circular 3D space with smooth rotation
- **Multiple Navigation Options**
  - Click on any book to view details
  - Previous/Next buttons
  - Keyboard shortcuts (← and → arrow keys)
  - Touch/swipe support for mobile devices
- **Auto-scroll** - Automatically rotates through books after 10 seconds of inactivity
- **Responsive Design** - Fully functional on desktop, tablet, and mobile devices
- **Magical Theme** - Purple and gold color scheme with animated particles
- **Direct Links** - Each book title links to its dedicated website

## 📁 File Structure

```
the-library/
├── index.html           # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Carousel logic and interactions
├── data.json           # Book data (34 novels)
├── librarydata.md      # Detailed book descriptions
├── README.md           # This file
└── img/                # Book cover images
    ├── A Familiar Feeling.png
    ├── A Witch on the Line.jpg
    ├── Bards of Discord.jpg
    └── ... (34 cover images total)
```

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! This is a pure HTML/CSS/JavaScript project.

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/triptych/the-library.git
cd the-library
```

2. Open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server installed)
npx http-server
```

Then navigate to `http://localhost:8000`

## 📚 How to Add or Update Books

### Adding a New Book

1. **Add the Book Cover Image**
   - Place the image in the `img/` folder
   - Recommended size: 200x300 pixels (or 2:3 aspect ratio)
   - Supported formats: JPG, PNG

2. **Update data.json**
   
   Add a new book entry to the `books` array:
   
   ```json
   {
     "title": "Your Book Title",
     "subtitle": "Optional Subtitle (can be omitted)",
     "author": "Andrew Wooldridge",
     "coverImage": "./img/Your Book Cover.jpg",
     "url": "https://your-book-site.puter.site/",
     "summary": "A compelling description of your book..."
   }
   ```

3. **Update librarydata.md** (Optional but recommended)
   
   Add a detailed entry for documentation:
   
   ```markdown
   ## Your Book Title
   **Author:** Andrew Wooldridge
   **URL:** https://your-book-site.puter.site/
   **Genre:** Fantasy
   **Cover Image:** [Your Book Cover.jpg](./img/Your%20Book%20Cover.jpg)

   ### Summary
   Detailed description with multiple paragraphs...
   
   ### Themes
   - Theme 1
   - Theme 2
   ```

### Updating an Existing Book

1. **To Update Book Information:**
   - Edit the corresponding entry in `data.json`
   - Update the title, summary, or URL as needed

2. **To Replace a Cover Image:**
   - Replace the image file in the `img/` folder
   - Keep the same filename, or update the `coverImage` path in `data.json`

3. **To Remove a Book:**
   - Delete the entry from `data.json`
   - Optionally remove the cover image from `img/`
   - Remove the entry from `librarydata.md`

## 🔄 How to Update This Library

### Complete Workflow for Adding a New Book

When adding a new book to the library, follow this complete workflow:

#### 1. Fetch Book Information

If the book has a website, fetch the cover image and metadata:

```bash
# Download the cover image
curl -o ./img/BookName.png https://book-website.puter.site/cover.png

# Or use wget
wget -O ./img/BookName.png https://book-website.puter.site/cover.png
```

#### 2. Update Data Files

Update all three data files in order:

**a) Update `data.json`**
- Add the new book entry to the `books` array
- Ensure valid JSON syntax (use a validator if needed)
- Include: title, author, coverImage, url, and summary

**b) Update `librarydata.md`**
- Add a detailed markdown entry with full book information
- Include: title, author, URL, genre, cover image link
- Add sections for Summary, Themes, Characters (if applicable)

**c) Update `README.md`**
- Update the book count in the "Current Book Collection" section
- Add the genre count if it's a new genre
- Add the book to the "Complete Book List"
- Update the file structure section if the count changed significantly

#### 3. Test Locally

Before committing, test your changes:

```bash
# Open the site locally
python -m http.server 8000

# Or use Node.js
npx http-server
```

Then navigate to `http://localhost:8000` and verify:
- ✅ New book appears in the carousel
- ✅ Cover image loads correctly
- ✅ Book title and summary display properly
- ✅ Link to book website works
- ✅ No console errors (check browser DevTools with F12)

#### 4. Commit Changes

After testing, commit your changes to git:

```bash
# Stage all modified files
git add data.json librarydata.md README.md img/BookName.png

# Or stage all changes
git add .

# Commit with a descriptive message
git commit -m "Add Mothership to the library"

# Push to GitHub
git push origin main
```

#### 5. Verify Deployment

If using GitHub Pages or auto-deployment:
- Wait a few minutes for deployment to complete
- Visit your live site and verify the new book appears
- Test on mobile devices if possible

### Quick Reference Commands

```bash
# Download cover image
curl -o ./img/BookName.png https://book-site.url/cover.png

# Test locally
python -m http.server 8000

# Commit and push
git add .
git commit -m "Add new book: BookName"
git push origin main
```

### Common Update Scenarios

**Scenario: Updating book information**
1. Edit `data.json` with new information
2. Update corresponding entry in `librarydata.md`
3. Test locally
4. Commit and push

**Scenario: Replacing a cover image**
1. Replace the image file in `img/` folder
2. Keep the same filename OR update path in `data.json`
3. Clear browser cache to see new image
4. Commit and push

**Scenario: Reordering books**
1. Reorder entries in `data.json` (carousel order follows JSON order)
2. Optionally reorder list in `README.md` and `librarydata.md`
3. Test locally to verify new order
4. Commit and push

## ⚙️ Technical Details

### Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - 3D transforms, animations, gradients
- **Vanilla JavaScript** - ES6+ features
- **Google Fonts** - Cinzel (headers) and Lato (body text)

### Key Components

#### 3D Carousel Algorithm
```javascript
// Books are positioned in a circle using trigonometry
const angle = index * angleStep;
const x = radius * Math.sin(angle * Math.PI / 180);
const z = radius * Math.cos(angle * Math.PI / 180);
```

#### Auto-scroll Feature
- Pauses on user interaction
- Resumes after 10 seconds of inactivity
- Detects mouse, touch, scroll, and keyboard events

#### Responsive Breakpoints
- Desktop: Full 400px radius carousel
- Mobile (<768px): Reduced to 300px radius with smaller books

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3a2a50;      /* Background purple */
    --secondary-color: #9274ce;    /* Accent purple */
    --accent-color: #e6c45c;       /* Gold/yellow */
    --text-light: #f5f1e9;         /* Light text */
    --text-dark: #2c1e32;          /* Dark text */
}
```

### Adjusting Carousel Settings

In `script.js`, modify these constants:

```javascript
const angleStep = 360 / totalBooks;     // Spacing between books
const radius = 400;                      // Distance from center
const INACTIVITY_DELAY = 10000;         // Auto-scroll delay (ms)
const AUTO_SCROLL_INTERVAL = 10000;     // Time between rotations (ms)
```

### Changing Fonts

Update the Google Fonts import in `styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

Then update the font-family properties.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Requires CSS 3D transforms support. IE11 and older browsers are not supported.

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be available at `https://username.github.io/the-library/`

### Netlify

1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`

### Vercel

```bash
npm install -g vercel
vercel
```

## 📊 Current Book Collection

The library currently features **34 novels** across multiple subgenres:

- Cozy Fantasy (9 books)
- Dark Fantasy (6 books)
- Romantic Fantasy (5 books)
- Space Fantasy (3 books)
- Young Adult (3 books)
- Urban Fantasy (2 books)
- Fantasy Comedy (1 book)
- Steampunk (1 book)
- Supernatural (1 book)
- Gothic Romance (1 book)
- Science Fantasy (1 book)
- Science Fiction (1 book)

All books are hosted on individual websites at the puter.site domain.

### Complete Book List

1. **The Chaos Sword** - A village girl bonds with an ancient, sentient sword
2. **The Librarian's Index** - A magical library with a living Index
3. **Gears and Spirits** - A tinker's tale of friendship and invention
4. **The Dark Lord's Bed & Breakfast** - A retired villain runs a B&B
5. **A Witch on the Line** - Thriller about a mysterious phone connection
6. **The Enchanted Teahouse** - Tea brewing becomes a gateway to magic
7. **The Magical Herbalist's Apprentice** - Plants that speak and ancient wisdom
8. **Mistweaver** - Tarot cards become powerful magical entities
9. **Mountain Odyssey** - Romantasy in treacherous magical peaks
10. **Reborn as a Boat** - Identity and friendship in an unexpected form
11. **The Shrine Gentleman** - A hunter becomes a shrine keeper
12. **Starlight Salvage** - Finding beauty in space junk
13. **Stellar Tides** - Magic and technology blend in floating islands
14. **Suffer the Dragon** - A monster healer instead of a hunter
15. **The Fallen Star** - Advanced technology versus corrupt sorcery
16. **The Sigil** - Multiverse adventures and cosmic mysteries
17. **Nine Lives: A Servant of Anubis** - Supernatural noir detective story
18. **Bards of Discord** - Rock music meets fantasy adventure
19. **Nightwing Academy** - Victorian steampunk shapeshifters
20. **The Gateway** - Guarding a magical portal to another realm
21. **Dragon Crossing** - A dragon and a boy switch bodies
22. **The Last Vanguard** - Science fantasy romance with AI
23. **The Comprehensive Guide to the Best Inns and Outs** - Journey of found family
24. **Bramblewood** - Romantic fantasy with elemental magic
25. **Clarity** - Dark sorceress finds redemption and love
26. **The Unbroken** - Ancient magic with a deadly price
27. **A Familiar Feeling** - Caring for abandoned magical creatures
28. **Toy Wars** - Romantic comedy with living toys
29. **The Undead Groundskeeper** - Gothic romance about curse-breaking
30. **The Tower's Shadow** - Identity and memory in dark fantasy
31. **Cybrina** - Corporate magic versus true witchcraft
32. **The Lost Librarian** - A librarian thrust into the real world
33. **Fantasy House Flip** - Retired adventurers flip cursed castles
34. **Mothership** - A colony ship AI transforms into a protective mother

## 🐛 Troubleshooting

### Books Not Appearing
- Check that `data.json` is valid JSON (use a JSON validator)
- Verify all image paths are correct
- Check browser console for errors (F12)

### Carousel Not Rotating
- Ensure JavaScript is enabled
- Check for console errors
- Verify `script.js` is loading properly

### Images Not Loading
- Confirm image files exist in the `img/` folder
- Check file name capitalization matches exactly
- Ensure image paths use forward slashes (`/`)

## 📄 Data Format Reference

### data.json Structure

```json
{
  "books": [
    {
      "title": "Required - Book title",
      "subtitle": "Optional - Subtitle or tagline",
      "author": "Required - Author name",
      "coverImage": "Required - Path to cover image",
      "url": "Required - Link to book website",
      "summary": "Required - Book description"
    }
  ]
}
```

**Field Requirements:**
- `title` - String, required, displayed as main heading
- `subtitle` - String, optional, displayed below title in italics
- `author` - String, required (currently always "Andrew Wooldridge")
- `coverImage` - String, required, relative path to image file
- `url` - String, required, clickable link on book title
- `summary` - String, required, displayed in book info panel

## 🤝 Contributing

This is a personal portfolio site, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

© 2025 Andrew Wooldridge. All rights reserved.

## 🔗 Links

- **Author Homepage:** https://andreww.xyz
- **GitHub Repository:** https://github.com/triptych/the-library

## 📧 Contact

For questions about the books or website, visit [Andrew's Homepage](https://andreww.xyz).

---

*Built with ❤️ and magic ✨*
