/**
 * CMS Data Loader
 * Loads content from CMS JSON/Markdown files and updates the website dynamically
 */

// Load and update social media links
async function loadSocialMedia() {
    try {
        const response = await fetch('/content/settings/social.json');
        if (!response.ok) return;

        const social = await response.json();

        // Update all social media links on the page
        const socialLinks = document.querySelectorAll('.social-media-float a');
        socialLinks.forEach(link => {
            const ariaLabel = link.getAttribute('aria-label');
            if (ariaLabel === 'Facebook' && social.facebook) {
                link.href = social.facebook;
            } else if (ariaLabel === 'Instagram' && social.instagram) {
                link.href = social.instagram;
            } else if (ariaLabel === 'LinkedIn' && social.linkedin) {
                link.href = social.linkedin;
            }
        });
    } catch (error) {
        console.log('Social media links using defaults');
    }
}

// Load and display news items from CMS
async function loadNewsItems() {
    try {
        // Get all markdown files from content/news/
        const newsContainer = document.querySelector('.news-list');
        if (!newsContainer) return;

        // Fetch the list of news files from GitHub API
        const response = await fetch('https://api.github.com/repos/behartless67-a11y/uva-tech-policy-lab/contents/content/news');
        if (!response.ok) return;

        const files = await response.json();
        const newsFiles = files.filter(file => file.name.endsWith('.md'));

        if (newsFiles.length === 0) return;

        // Fetch and parse each news file
        const newsItems = await Promise.all(
            newsFiles.map(async file => {
                const contentResponse = await fetch(file.download_url);
                const content = await contentResponse.text();
                return parseMarkdownNews(content);
            })
        );

        // Sort by date (newest first)
        newsItems.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Display the news items
        newsContainer.innerHTML = newsItems.map(item => `
            <article class="news-item">
                <span class="news-date">${formatDate(item.date)}</span>
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            </article>
        `).join('');
    } catch (error) {
        console.log('News items using defaults');
    }
}

// Parse markdown news file with frontmatter
function parseMarkdownNews(content) {
    const lines = content.split('\n');
    let inFrontmatter = false;
    let frontmatter = {};
    let body = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.trim() === '---') {
            if (!inFrontmatter) {
                inFrontmatter = true;
            } else {
                inFrontmatter = false;
            }
            continue;
        }

        if (inFrontmatter) {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
                frontmatter[key.trim()] = valueParts.join(':').trim();
            }
        } else if (line.trim() !== '') {
            body.push(line);
        }
    }

    return {
        date: frontmatter.date || '',
        title: frontmatter.title || '',
        body: body.join(' ').substring(0, 200) // Limit to 200 chars for preview
    };
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
}

// Load contact information
async function loadContactInfo() {
    try {
        const response = await fetch('/content/settings/contact.json');
        if (!response.ok) return;

        const contact = await response.json();

        // Update email links
        document.querySelectorAll('a[href^="mailto:techpolicylab"]').forEach(link => {
            if (contact.email) {
                link.href = `mailto:${contact.email}`;
                if (link.textContent.includes('techpolicylab')) {
                    link.textContent = contact.email;
                }
            }
        });

        // Update phone numbers
        if (contact.phone) {
            document.querySelectorAll('.contact-phone').forEach(el => {
                el.textContent = contact.phone;
            });
        }

        // Update address
        if (contact.address) {
            document.querySelectorAll('.contact-address').forEach(el => {
                el.textContent = contact.address;
            });
        }
    } catch (error) {
        console.log('Contact info using defaults');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadSocialMedia();
    loadNewsItems();
    loadContactInfo();
});
