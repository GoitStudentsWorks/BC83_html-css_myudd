
# Reality Shift Project by Team#2

Лендинг-візитівка VR-клубу за готовим макетом. 

- Мова інтерфейсу: українська
- Адаптивність: 375 px, 768 px, 1440 px (готові макети, розроблені у Figma)


## Технології

 - HTML5 
 - CSS3 (Flexbox, змінні)
 - JS (слухачі подій та стилі) 
 - Git / GitHub 
 - Figma 
 - GitHub Pages


## Структура сторінки



- Header 
- Hero 
- Про нас та ігри 
- Переваги 
- Тарифи 
- Форма бронювання 
- Галерея 
- Відгуки 
- Footer

## Інтерактивні елементи

- Всі посилання зміюють колір тексту при наведенні;
- Всі кнопки зміюють колір фону при наведенні;
- Реалізоване завантаження сторінки як "smooth";
- Картки секції "Про нас" та "Переваги" мають ефекти збільшення та тіні при наведенні;
- Головне зображення секції "Галерея" змінюється при натисканні;
- При наведенні на картки секції "Відгуки" з'являється ефект інтерактивного підсвічування;
- Мобільне меню з'являється та зникає за допомогою відповідних кнопок.
## Технічні вимоги

- [x] Верстка адаптивна, окрім мобільних пристроїв. Точки переламу:
  - **mobile:** верстка гумова від 320 px, стає адаптивною з 375 px
  - **tablet:** з 768 px
  - **desktop:** з 1440 px
- [x] Верстка валідна ([W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/))
- [x] Дотримання семантики відповідно до стандартів HTML5
- [x] Підключення шрифтів
- [x] Оптимізація розмірів векторної та растрової графіки
- [x] Підтримка відображення картинок для retina-екранів
- [x] Оптимізоване завантаження зображень
- [x] Всі svg-іконки підключені через sprite
- [x] Додано фавікон сторінки
- [x] Ефекти клікабельних елементів стилізовані відповідно до UI Kit; для `hover` додано зміну курсору
## Наша команда
- [@vladbondarenko09](https://www.github.com/vladbondarenko09)
- [@andrii-borysiak](https://www.github.com/andrii-borysiak)
- [@kvoytikh](https://www.github.com/kvoytikh)
- [@alekseypr6548-hu](https://www.github.com/alekseypr6548-hub)
- [@DmytroPempus](https://www.github.com/DmytroPempus)
- [@tskitsune](https://www.github.com/tskitsune)
- [@tetiana8989](https://www.github.com/tetiana8989)
- [@myudd](https://www.github.com/myudd)



## Як працювати з репозиторієм

Гілка main захищена, прямий push заборонений.

```bash
git clone git@github.com:myudd/RealityShift_by_team2.git
cd RealityShift_by_team2

git switch -c feature/назва-секції     # 1. власна гілка
git add .
git commit -m "feat: додано секцію ігор" # 2. коміти
git push -u origin feature/назва-секції  # 3. пуш гілки
```
Далі на GitHub: Pull Request → рев'ю від іншого учасника → Merge.

Перед роботою завжди оновлюйте main:

```bash
git switch main && git pull
```

