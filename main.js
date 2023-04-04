async function getNews() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const news = await response.json();

        return news;
    } catch (error) {
        console.error(error);
    }
}

async function renderNews() {
    const newsContainer = document.getElementById('news-container');
    const news = await getNews();

    news.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = 'https://picsum.photos/300/200';
        image.alt = 'Изображение новости';
        card.appendChild(image);

        const title = document.createElement('h2');
        title.textContent = article.title;
        card.appendChild(title);

        const description = document.createElement('p');
        description.textContent = article.body;
        card.appendChild(description);

        newsContainer.appendChild(card);
    });
}

renderNews();