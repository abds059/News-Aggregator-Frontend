const btn = document.getElementById("btn");
const news_container = document.getElementById("news-container");
const select_options = document.getElementById("options");

const BASE_URL = "https://news-aggregator-backend-one.vercel.app/api/news";

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
    let url = `${BASE_URL}?`;

    if (input.trim() !== '') {
        url += `q=${encodeURIComponent(input)}&`;
    }

    if (category.trim() !== '') {
        url += `topic=${encodeURIComponent(category.toLowerCase())}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        renderArticles(data.articles);
    } catch (error) {
        news_container.innerHTML = `<p>Error: ${error.message}</p>`;
        console.error("Fetch error:", error);
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
