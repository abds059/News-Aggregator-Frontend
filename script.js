const btn = document.getElementById("btn");
const news_container = document.getElementById("news-container");
const select_options = document.getElementById("options");

const BASE_URL = "https://news-aggregator-backend-one.vercel.app/api/news";


async function getdata(input = '', category = '') {
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

        renderarticles(data.articles);
    } catch (error) {
        news_container.innerHTML = `<p>🚨 Error: ${error.message}</p>`;
        console.error("Fetch error:", error);
    }
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
