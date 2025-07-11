# News-Aggregator-Frontend

This is the **frontend** for the [News Aggregator](https://abds059.github.io/News-Aggregator-Frontend/) project — a clean and responsive UI for browsing Pakistani news using categories and search.

**Live Frontend URL:**
[https://abds059.github.io/News-Aggregator-Frontend](https://abds059.github.io/News-Aggregator-Frontend)

---

## Features

* Browse top news headlines 
* Filter by categories (e.g., world, politics, business, etc.)
* Search for specific keywords
* Clean, mobile-responsive design
* Powered by a secure backend 

---

## Folder Structure

```
News-Aggregator-Frontend/
│
├── index.html        # Main HTML page
├── style.css         # Styling with CSS variables and responsiveness
├── script.js         # Handles API calls and dynamic rendering
└── README.md         
```

---

## How It Works

* On page load, shows top headlines from Pakistan
* User can select a category or type a keyword
* Makes a request to the backend `/api/news` route with query params
* Backend handles API key + GNews API request and returns filtered news
* Articles are rendered as responsive cards

## Getting Started Locally

Clone the repository:

```bash
git clone https://github.com/abds059/News-Aggregator-Frontend.git
```

Then open `index.html` in your browser.

>  Note: To fully function, it must be connected to the deployed backend.

---


## Deployment

The site is hosted on **GitHub Pages**:

1. Push the repo to GitHub
2. Go to **Repository > Settings > Pages**
3. Select branch: `main`, folder: `/root`
4. Done! Your site is live 

---

## Requirements

* A connected backend (like Vercel) to serve the API
* API key should **never** be exposed in the frontend

---

## Example Usage

```
GET https://news-aggregator-backend-one.vercel.app/api/news?q=pakistan&topic=business
```

---

## Tech Stack

* HTML5 + CSS3
* JavaScript (DOM + Fetch API)
* GitHub Pages for hosting

---

## License

This frontend is open-source and intended for learning purposes.
