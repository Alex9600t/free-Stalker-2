ad1 = Math.floor(Math.random() * 5);
ad2 = Math.floor(Math.random() * 5);

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const loading = async () => {
    const steps = ['', '.', '..', '...'];

    while (true) {
        for (let step of steps) {
            document.querySelectorAll('.loading').forEach(el => {
              el.textContent = step
            });
            await sleep(500);
        }
    }
};

loading();


if (ad1 === 0) {
    console.log("0" + ad1);
    document.querySelector('.ad1').innerHTML = `<div>
                <img src="img/x450.jpg" alt="" height="200px">
                <p class="ad1_text">Как на ежедневный макияж тратить не более 15 минут?</p>
            </div>`
} else if (ad1 === 1) {
    console.log("1" + ad1);
    document.querySelector('.ad1').innerHTML = `<div>
                <img src="img/x460.jpg" alt="" height="400px">
                <p class="ad1_text">Помогите накормить животных.</p>
            </div>`
} else if (ad1 === 2) {
    console.log("2" + ad1);
    document.querySelector('.ad1').innerHTML = `<div>
                <img src="img/x470.jpg" alt="" height="400px">
                <p class="ad1_text">Утопить детей быстро и в кратчайшие сроки! Скидка 30% в честь Нового Года!</p>
            </div>`
        } else if (ad1 === 3) {
            console.log("3" + ad1);
            document.querySelector('.ad1').innerHTML = `<div>
            <img src="img/x480.jpg" alt="" height="200px">
            <p class="ad1_text">геймеры какой игры имеют низкий IQ?</p>
            </div>`
            console.log("4" + ad1);
} else if (ad1 === 4) {
    document.querySelector('.ad1').innerHTML = `<div>
                <img src="img/x150.jpg" alt="" height="200px">
                <p class="ad1_text">Зуб Мегалодона 11,96 см с сертификатом подлинности.</p>
            </div>`
};

if (ad2 === 0) {
    console.log("0" + ad2);
    document.querySelector('.ad2').innerHTML = `<div>
                <img src="img/x250.jpg" alt="" height="400px">
                <p class="ad1_text">BMW 321 Седан Черный.</p>
                <b>550 000 ₽</b>
                </div>`
} else if (ad2 === 1) {
    console.log("1" + ad2);
    document.querySelector('.ad2').innerHTML = `<div>
                <img src="img/x260.jpg" alt="" height="300px">
                <p class="ad1_text">Ищем тех, кому нужен протез руки.</p>
                <b>БЕСПЛАТНО ₽</b>
                </div>`
} else if (ad2 === 2 || ad2 === 3) {
    console.log("2" + ad2 + 'or 3' + ad2);
    document.querySelector('.ad2').innerHTML = `<div>
                <img src="img/Moshenniki.jpg" alt="" height="400px">
                <p class="ad1_text">Поддержать автора подобных сайтов.</p>
                <b>От 0 ₽ до ∞ ₽</b>
                </div>`
} else if (ad2 === 4) {
    document.querySelector('.ad2').innerHTML = `<div>
                <img src="img/x270.jpg" alt="" height="200px">
                <p class="ad1_text">Есть еврейские корни? Успейте получить паспорт Израиля!</p>
                <b>От 990 €</b>
                </div>`
};


setTimeout(() => { window.location.href = '../final'; }, 10000);