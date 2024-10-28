// Массив с данными о команде
const teamData = [
    {
        name: "Team Captain",
        player: "Tagybergen, Askhat Tagybergenuly",
        image: "6241a42a22ed0.jpg",
        alt: "Captain"
    },
    {
        name: "Our Stadium",
        player: "Astana Arena",
        image: "images.jpeg",
        alt: "Stadium"
    },
    {
        name: "Head Coach",
        player: "Cherchesov, Stanislav Salamovich",
        image: "6274a4b859806.jpg",
        alt: "Coach"
    }
];

// Функция для отображения информации о команде
function displayTeamInfo() {
    const teamInfoContainer = document.getElementById("team-info");

    teamData.forEach(member => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-lg-4 col-md-4 col-sm-12";

        const img = document.createElement("img");
        img.src = member.image;
        img.className = "rounded-circle img-fluid img-hover-zoom first-three";
        img.alt = member.alt;

        const h4 = document.createElement("h4");
        h4.textContent = member.name;

        const p = document.createElement("p");
        p.textContent = member.player;

        colDiv.appendChild(img);
        colDiv.appendChild(h4);
        colDiv.appendChild(p);
        teamInfoContainer.appendChild(colDiv);
    });
}

// Функция для получения новостей
async function fetchNews() {
    const apiKey = '58d55b134d0b44faa2ca7d78ccd32caf'; // Замените на ваш API ключ
    const url = `https://newsapi.org/v2/everything?q=football&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Функция для отображения новостей
function displayNews(articles) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = ''; // Очистка контейнера перед добавлением новых новостей

    articles.forEach(article => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-lg-4 col-md-6 col-sm-12 mb-4";

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = article.urlToImage || 'default-image.jpg'; // Укажите изображение по умолчанию
        img.className = "card-img-top";
        img.alt = article.title;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = article.title;

        const description = document.createElement("p");
        description.className = "card-text";
        description.textContent = article.description;

        const link = document.createElement("a");
        link.href = article.url;
        link.className = "btn btn-primary";
        link.target = "_blank";
        link.textContent = "Read More";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        card.appendChild(img);
        card.appendChild(cardBody);
        colDiv.appendChild(card);
        newsContainer.appendChild(colDiv);
    });
}

// Убедитесь, что DOM загружен перед выполнением кода
document.addEventListener('DOMContentLoaded', function () {
    // Вызов функции для отображения данных
    displayTeamInfo();
    fetchNews(); // Вызов функции для получения новостей

    // Автозаполнение формы из локального хранилища
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Заполнение полей формы, если данные есть в localStorage
    if (localStorage.getItem('contactName')) {
        nameInput.value = localStorage.getItem('contactName');
    }
    if (localStorage.getItem('contactEmail')) {
        emailInput.value = localStorage.getItem('contactEmail');
    }
    if (localStorage.getItem('contactMessage')) {
        messageInput.value = localStorage.getItem('contactMessage');
    }

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Toggle theme
    themeToggle.addEventListener('click', function () {
        if (body.classList.contains('day-theme')) {
            body.classList.replace('day-theme', 'night-theme');
            themeToggle.textContent = 'Switch to Day Theme';
        } else {
            body.classList.replace('night-theme', 'day-theme');
            themeToggle.textContent = 'Switch to Night Theme';
        }
    });

    // Read more button functionality
    const readMoreButton = document.getElementById('readMore');
    const extraContent = document.getElementById('extraContent');

    readMoreButton.addEventListener('click', function () {
        if (extraContent.style.display === 'none') {
            extraContent.style.display = 'block';
            readMoreButton.textContent = 'Read Less';
        } else {
            extraContent.style.display = 'none';
            readMoreButton.textContent = 'Read More';
        }
    });

    // Form submission with validation
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate email
        const email = emailInput.value;
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Toggle theme
    themeToggle.addEventListener('click', function () {
        if (body.classList.contains('day-theme')) {
            body.classList.replace('day-theme', 'night-theme');
            themeToggle.textContent = 'Switch to Day Theme';
        } else {
            body.classList.replace('night-theme', 'day-theme');
            themeToggle.textContent = 'Switch to Night Theme';
        }
    });

    // Read more button functionality
    const readMoreButton = document.getElementById('readMore');
    const extraContent = document.getElementById('extraContent');

    readMoreButton.addEventListener('click', function () {
        if (extraContent.style.display === 'none') {
            extraContent.style.display = 'block';
            readMoreButton.textContent = 'Read Less';
        } else {
            extraContent.style.display = 'none';
            readMoreButton.textContent = 'Read More';
        }
    });

    // Form submission with validation
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate email
        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Store form data in local storage
        localStorage.setItem('contactName', document.getElementById('name').value);
        localStorage.setItem('contactEmail', email);
        localStorage.setItem('contactMessage', document.getElementById('message').value);

        successMessage.style.display = 'block';
        contactForm.reset();
    });

    // Validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Play sound button functionality
    document.getElementById('play-sound-btn').addEventListener('click', function() {
        const sound = new Audio('notification_o14egLP.mp3');
        sound.play();
    });

    // Fetch news from an external API
    fetch('https://api.football-data.org/v2/competitions/CL/matches', {
        headers: {
            'X-Auth-Token': '2c93003993714e3cb720c4bed2522ee6' // Ваш API ключ
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
    console.log(data); // Добавьте эту строку, чтобы посмотреть, что возвращает API
    const newsContainer = document.getElementById('newsContainer');
    const matches = data.matches.slice(0, 6); // Ограничиваем до 6 матчей
    matches.forEach(match => {
        console.log(match); // Вывод каждого матча в консоль для отладки
        const col = document.createElement('div');
        col.classList.add('col-md-4');
        col.innerHTML = `
            <div class="card img-hover-zoom">
                <div class="card-body">
                    <h5 class="card-title">${match.homeTeam.name} vs ${match.awayTeam.name}</h5>
                    <p class="card-text">${new Date(match.date).toLocaleString()}</p>
                    <p>${match.status}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `;
        newsContainer.appendChild(col);
    });
})

    .catch(error => {
        console.error('Error fetching data:', error);
        alert('Не удалось загрузить данные о матчах. Проверьте консоль для получения дополнительной информации. Ошибка: ' + error.message);
    });
});

        }

        // Store form data in local storage
        localStorage.setItem('contactName', nameInput.value);
        localStorage.setItem('contactEmail', email);
        localStorage.setItem('contactMessage', messageInput.value);

        successMessage.style.display = 'block';
        contactForm.reset();
    });

    // Validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Play sound button functionality
    document.getElementById('play-sound-btn').addEventListener('click', function() {
        const sound = new Audio('notification_o14egLP.mp3');
        sound.play();
    });
});
