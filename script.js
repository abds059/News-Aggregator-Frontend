const btn = document.getElementById("btn");
const news_container = document.getElementById("news-container");
const select_options = document.getElementById("options");

const BACKEND_BASE_URL = "https://your-backend-name.onrender.com/news"; // 👈 replace with your actual Render URL

function renderArticles(articles) {
    news_container.innerHTML = '';

    if (!articles || articles.length === 0) {
        news_container.innerHTML = 'No articles found';
        return;
    }

    articles.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${article.image || 'https://via.placeholder.com/300x150'}" alt="News Image">
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description || 'No description available.'}</p>
            <small><strong>${article.source.name || 'Unknown'}</strong> • ${new Date(article.publishedAt).toLocaleString()}</small>
        `;

        news_container.appendChild(card);
    });
}

async function getData(input = '', category = '') {
    let url = `${BACKEND_BASE_URL}?`;

    if (input.trim()) {
        url += `q=${encodeURIComponent(input)}&`;
    }

    if (category.trim()) {
        url += `topic=${encodeURIComponent(category.toLowerCase())}`;
    }

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        renderArticles(data.articles);
    } catch (err) {
        console.error("Fetch error:", err);
        news_container.innerHTML = `<p>❌ Error fetching news.</p>`;
    }
}

// Fetch general news on load
window.addEventListener("DOMContentLoaded", () => getData());

// Search button click
btn.addEventListener("click", () => {
    const input = document.getElementById("input-field").value;
    const category = select_options.value;
    getData(input, category);
});

// Auto-fetch when category is changed
select_options.addEventListener("change", () => {
    const input = document.getElementById("input-field").value;
    const category = select_options.value;
    getData(input, category);
});
