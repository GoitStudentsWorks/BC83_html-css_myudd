
# Reality Shift Project by Team#2

Landing page – wizytówka klubu VR wykonana według gotowego projektu. 

- Język interfejsu: ukraiński
- Responsywność: 375 px, 768 px, 1440 px (gotowe makiety przygotowane w Figmie)


## Technologie

 - HTML5 
 - CSS3 (Flexbox, zmienne)
 - JS (nasłuchiwanie zdarzeń i style) 
 - Git / GitHub 
 - Figma 
 - GitHub Pages


## Struktura strony



- Header 
- Hero 
- O nas i gry 
- Zalety 
- Cennik 
- Formularz rezerwacji 
- Galeria 
- Opinie 
- Footer

## Elementy interaktywne

- Wszystkie linki zmieniają kolor tekstu po najechaniu kursorem;
- Wszystkie przyciski zmieniają kolor tła po najechaniu kursorem;
- Ładowanie strony zostało zaimplementowane w trybie "smooth";
- Karty sekcji "O nas" i "Zalety" mają efekty powiększenia i cienia po najechaniu kursorem;
- Główne zdjęcie sekcji "Galeria" zmienia się po kliknięciu;
- Po najechaniu kursorem na karty sekcji "Opinie" pojawia się interaktywny efekt podświetlenia;
- Menu mobilne pojawia się i znika za pomocą odpowiednich przycisków.
## Wymagania techniczne

- [x] Układ jest responsywny, z wyjątkiem urządzeń mobilnych. Punkty przełamania:
  - **mobile:** układ płynny od 320 px, staje się adaptacyjny od 375 px
  - **tablet:** od 768 px
  - **desktop:** od 1440 px
- [x] Układ jest poprawny pod względem walidacji ([W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/))
- [x] Zachowanie semantyki zgodnie ze standardami HTML5
- [x] Podłączenie czcionek
- [x] Optymalizacja rozmiarów grafiki wektorowej i rastrowej
- [x] Obsługa wyświetlania obrazów na ekranach retina
- [x] Zoptymalizowane ładowanie obrazów
- [x] Wszystkie ikony SVG są podłączone przez sprite
- [x] Dodano favicon strony
- [x] Efekty elementów klikalnych są stylizowane zgodnie z UI Kit; dla `hover` dodano zmianę kursora
## Nasz zespół
- [@vladbondarenko09](https://www.github.com/vladbondarenko09)
- [@andrii-borysiak](https://www.github.com/andrii-borysiak)
- [@kvoytikh](https://www.github.com/kvoytikh)
- [@alekseypr6548-hu](https://www.github.com/alekseypr6548-hub)
- [@DmytroPempus](https://www.github.com/DmytroPempus)
- [@tskitsune](https://www.github.com/tskitsune)
- [@tetiana8989](https://www.github.com/tetiana8989)
- [@myudd](https://www.github.com/myudd)



## Jak pracować z repozytorium

Gałąź main jest chroniona, bezpośredni push jest zabroniony.

```bash
git clone git@github.com:myudd/RealityShift_by_team2.git
cd RealityShift_by_team2

git switch -c feature/nazwa-sekcji     # 1. własna gałąź
git add .
git commit -m "feat: dodano sekcję gier" # 2. commity
git push -u origin feature/nazwa-sekcji  # 3. push gałęzi
```
Dalej na GitHub: Pull Request → recenzja innego uczestnika → Merge.

Przed rozpoczęciem pracy zawsze aktualizuj main:

```bash
git switch main && git pull
```

