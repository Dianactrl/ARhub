// --- 1. ЛОГИКА МОДАЛЬНОГО ОКНА ---
AOS.init();
// Находим элементы
const modal = document.getElementById('modal-form');
const modalOpenBtns = document.querySelectorAll('.cta-button, .callback-button, .service-button');
const closeBtn = document.querySelector('.close-button');

// Функция открытия модального окна
function openModal() {
    modal.style.display = 'flex';
    document.body.classList.add('no-scroll'); // Запрещаем скролл фона
}

// Функция закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
    // Разрешаем скролл, только если мобильное меню ТОЖЕ не открыто
    if (!nav.classList.contains('open')) {
        document.body.classList.remove('no-scroll');
    }
}

// Открытие модального окна
modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        openModal();
    });
});

// Закрытие модального окна по крестику
closeBtn.addEventListener('click', closeModal);

// Закрытие модального окна по клику вне
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});


// --- 2. ЛОГИКА МОБИЛЬНОГО МЕНЮ ---
// (Это тот код, который ты хотела вставить)

const burgerButton = document.querySelector('.burger-menu'); 
const nav = document.querySelector('.main-nav');
const closeMenuButton = document.querySelector('.close-menu-btn'); 

// Функция открытия мобильного меню
const openMobileMenu = () => {
    nav.classList.add('open');
    document.body.classList.add('no-scroll'); 
    
    // !!! НОВОЕ: Скрыть кнопку-бургер !!!
    if (burgerButton) {
        burgerButton.style.display = 'none'; 
    }
};

// Функция закрытия мобильного меню
const closeMobileMenu = () => {
    nav.classList.remove('open');
    
    // !!! НОВОЕ: Показать кнопку-бургер !!!
    if (burgerButton) {
        // Используем 'flex', так как в CSS вы, вероятно, используете display: flex для его отображения
        burgerButton.style.display = 'flex'; 
    }

    // Разрешаем скролл, только если модальное окно ТОЖЕ не открыто
    if (modal.style.display !== 'flex') {
        document.body.classList.remove('no-scroll');
    }
};

if (burgerButton && nav) {
    // Открытие по бургеру
    burgerButton.addEventListener('click', openMobileMenu); 

    // Закрытие по крестику
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }

    // Закрытие при клике на якорные ссылки (например, #portfolio)
    nav.querySelectorAll('ul a[href^="#"]').forEach(link => { 
        link.addEventListener('click', closeMobileMenu);
    });
}


// --- 3. ОБЩИЙ ОБРАБОТЧИК КЛАВИШИ ESC ---
// (Он заменяет твой старый обработчик ESC)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Если модальное окно открыто, оно главнее. Закрываем его.
        if (modal.style.display === 'flex') {
            closeModal();
        } 
        // Иначе, если открыто мобильное меню, закрываем его.
        else if (nav.classList.contains('open')) {
            closeMobileMenu();
        }
    }
});