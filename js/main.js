const swiperTop = new Swiper('.top_swiper', {
  // Optional parameters
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var swiperAbout = new Swiper(".about_slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

document.querySelectorAll(".accordion_triger").forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordion_item-active')
  })
})


document.querySelector(".burger").addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
});

// упражнение



// Получаем форму и инпут
const formHtml = document.querySelector('.footer_item-form');
const formInput = document.querySelector('.footer_item-input');

// Получаем всплывающее окно
const confirmation = document.querySelector('.footer_items-window');

// Регулярное выражение для проверки email
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

let savedEmail = ''; // Переменная для сохранения валидного email

// Функция для обработки ввода в поле email
function handleInput() {
  const inputValue = formInput.value.trim(); // Получаем значение и обрезаем пробелы
  const isValid = isEmailValid(inputValue); // Проверяем введенный email

  if (isValid) {
    formInput.style.borderColor = 'green'; // Устанавливаем рамку зеленого цвета
  } else {
    formInput.style.borderColor = 'red'; // Устанавливаем рамку красного цвета
  }
}

// Функция для проверки валидности email
function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

// Слушатель события ввода в поле email
formInput.addEventListener('input', handleInput);

// Слушатель события отправки формы
formHtml.addEventListener('submit', function (event) {
  event.preventDefault(); // Отменяем стандартное действие отправки формы

  const inputValue = formInput.value.trim(); // Получаем значение и обрезаем пробелы

  if (isEmailValid(inputValue)) {
    savedEmail = inputValue; // Сохраняем валидный email
    formInput.value = ''; // Очищаем поле ввода
    confirmation.classList.toggle('footer_items-window-active'); // Показываем всплывающее окно
  }
});

// Слушатель события для закрытия всплывающего окна
document.querySelector('.window_btn').addEventListener('click', function () {
  confirmation.classList.remove('footer_items-window-active'); // Закрываем всплывающее окно
});
















