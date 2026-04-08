// main.js
// Enhanced interactive features for modern website experience

document.addEventListener('DOMContentLoaded', () => {
    console.log('LiTong Power website loaded with enhanced features.');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced News Article Features
    initializeNewsFeatures();
    
    // Tab System for Product Pages
    initializeTabSystem();
    
    // Progressive Disclosure (Accordion)
    initializeDisclosureModules();
    
    // Reading Progress Indicator
    initializeReadingProgress();
    
    // Social Sharing Functionality
    initializeSocialSharing();
    
    // Newsletter Form Enhancement
    initializeNewsletterForm();
    
    // Image Loading Optimization
    initializeLazyLoading();
});

// News Article Enhanced Features
function initializeNewsFeatures() {
    // Reading time calculation
    calculateReadingTime();
    
    // Article navigation
    createArticleNavigation();
    
    // Font size controls
    addFontSizeControls();
}

function calculateReadingTime() {
    const articles = document.querySelectorAll('.news-content-module, .content-section');
    articles.forEach(article => {
        const text = article.textContent || article.innerText || '';
        const wordsPerMinute = 200;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / wordsPerMinute);
        
        // Update reading time if element exists
        const readingTimeElement = document.querySelector('.news-meta-item .news-meta-icon[alt="reading time"], .meta-item .meta-icon:last-of-type');
        if (readingTimeElement && readingTimeElement.nextElementSibling) {
            readingTimeElement.nextElementSibling.textContent = `${readingTime} min read`;
        }
    });
}

function createArticleNavigation() {
    const headings = document.querySelectorAll('.news-content-module h2, .content-section h2');
    if (headings.length > 2) {
        const nav = document.createElement('div');
        nav.className = 'article-navigation';
        nav.innerHTML = '<h3>Contents</h3><ul></ul>';
        
        const ul = nav.querySelector('ul');
        headings.forEach((heading, index) => {
            const id = `section-${index}`;
            heading.id = id;
            
            const li = document.createElement('li');
            li.innerHTML = `<a href="#${id}">${heading.textContent}</a>`;
            ul.appendChild(li);
        });
        
        // Insert navigation after hero section
        const heroSection = document.querySelector('.news-article-hero, .modern-page-header');
        if (heroSection && heroSection.nextElementSibling) {
            heroSection.nextElementSibling.insertBefore(nav, heroSection.nextElementSibling.firstChild);
        }
    }
}

function addFontSizeControls() {
    if (document.querySelector('.news-article-container')) {
        const controls = document.createElement('div');
        controls.className = 'font-size-controls';
        controls.innerHTML = `
            <button id="decrease-font" aria-label="Decrease font size">A-</button>
            <button id="reset-font" aria-label="Reset font size">A</button>
            <button id="increase-font" aria-label="Increase font size">A+</button>
        `;
        
        document.body.appendChild(controls);
        
        let currentSize = 100;
        const container = document.querySelector('.news-article-container');
        
        document.getElementById('decrease-font').addEventListener('click', () => {
            if (currentSize > 80) {
                currentSize -= 10;
                container.style.fontSize = currentSize + '%';
            }
        });
        
        document.getElementById('increase-font').addEventListener('click', () => {
            if (currentSize < 140) {
                currentSize += 10;
                container.style.fontSize = currentSize + '%';
            }
        });
        
        document.getElementById('reset-font').addEventListener('click', () => {
            currentSize = 100;
            container.style.fontSize = '100%';
        });
    }
}

// Tab System Implementation
function initializeTabSystem() {
    document.querySelectorAll('.tab-system').forEach(tabSystem => {
        const buttons = tabSystem.querySelectorAll('.tab-button');
        const contents = tabSystem.querySelectorAll('.tab-content');
        
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                buttons.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                if (contents[index]) {
                    contents[index].classList.add('active');
                }
            });
        });
        
        // Activate first tab by default
        if (buttons[0] && contents[0]) {
            buttons[0].classList.add('active');
            contents[0].classList.add('active');
        }
    });
}

// Progressive Disclosure (Accordion) Implementation
function initializeDisclosureModules() {
    document.querySelectorAll('.disclosure-module').forEach(module => {
        const header = module.querySelector('.disclosure-header');
        const content = module.querySelector('.disclosure-content');
        
        if (header && content) {
            header.addEventListener('click', () => {
                const isActive = header.classList.contains('active');
                
                // Close all other disclosure modules in the same container
                const container = module.closest('.container, .news-article-container');
                if (container) {
                    container.querySelectorAll('.disclosure-header.active').forEach(activeHeader => {
                        if (activeHeader !== header) {
                            activeHeader.classList.remove('active');
                            activeHeader.nextElementSibling.classList.remove('active');
                        }
                    });
                }
                
                // Toggle current module
                header.classList.toggle('active');
                content.classList.toggle('active');
            });
        }
    });
}

// Reading Progress Indicator
function initializeReadingProgress() {
    if (document.querySelector('.news-article-container, .modern-article-layout')) {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
        document.body.appendChild(progressBar);
        
        const progressBarFill = progressBar.querySelector('.reading-progress-bar');
        
        window.addEventListener('scroll', () => {
            const article = document.querySelector('.news-content-wrapper, .modern-article-layout');
            if (article) {
                const articleTop = article.offsetTop;
                const articleHeight = article.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollTop = window.pageYOffset;
                
                const progress = Math.min(
                    Math.max((scrollTop - articleTop + windowHeight * 0.5) / articleHeight, 0),
                    1
                );
                
                progressBarFill.style.width = (progress * 100) + '%';
            }
        });
    }
}

// Social Sharing Functionality
function initializeSocialSharing() {
    document.querySelectorAll('.news-share-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            const text = encodeURIComponent(document.querySelector('meta[name="description"]')?.content || '');
            
            let shareUrl = '';
            
            if (button.classList.contains('linkedin')) {
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            } else if (button.classList.contains('twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            } else if (button.classList.contains('facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            } else if (button.classList.contains('email')) {
                shareUrl = `mailto:?subject=${title}&body=${text}%0A%0A${url}`;
            }
            
            if (shareUrl) {
                if (shareUrl.startsWith('mailto:')) {
                    window.location.href = shareUrl;
                } else {
                    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
                }
            }
        });
    });
}

// Newsletter Form Enhancement
function initializeNewsletterForm() {
    document.querySelectorAll('.news-newsletter-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = form.querySelector('.news-newsletter-input').value;
            const button = form.querySelector('.news-newsletter-button');
            
            if (email && isValidEmail(email)) {
                // Simulate subscription (replace with actual API call)
                button.textContent = 'Subscribing...';
                button.disabled = true;
                
                setTimeout(() => {
                    button.textContent = 'Subscribed!';
                    button.style.background = '#28a745';
                    form.querySelector('.news-newsletter-input').value = '';
                    
                    setTimeout(() => {
                        button.textContent = 'Subscribe';
                        button.disabled = false;
                        button.style.background = '';
                    }, 3000);
                }, 1000);
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#dc3545' : '#007bff'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Lazy Loading for Images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .font-size-controls {
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        background: var(--white);
        border-radius: 25px;
        padding: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    .font-size-controls button {
        width: 35px;
        height: 35px;
        border: none;
        background: var(--light-gray);
        border-radius: 50%;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s ease;
    }
    
    .font-size-controls button:hover {
        background: var(--secondary-color);
        color: var(--white);
    }
    
    .article-navigation {
        background: var(--light-gray);
        padding: 20px;
        border-radius: 10px;
        margin: 20px 0;
    }
    
    .article-navigation h3 {
        margin: 0 0 15px 0;
        color: var(--primary-color);
    }
    
    .article-navigation ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .article-navigation li {
        margin-bottom: 8px;
    }
    
    .article-navigation a {
        color: var(--text-color);
        text-decoration: none;
        transition: color 0.3s ease;
    }
    
    .article-navigation a:hover {
        color: var(--secondary-color);
    }
`;
document.head.appendChild(style);