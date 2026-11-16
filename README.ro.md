
# Reality Shift Project by Team#2

Landing page de tip carte de vizită pentru un club VR, realizat după un design gata făcut. 

- Limba interfeței: ucraineană
- Adaptabilitate: 375 px, 768 px, 1440 px (machete gata făcute, create în Figma)


## Tehnologii

 - HTML5 
 - CSS3 (Flexbox, variabile)
 - JS (jucători de evenimente și stiluri) 
 - Git / GitHub 
 - Figma 
 - GitHub Pages


## Structura paginii



- Header 
- Hero 
- Despre noi și jocuri 
- Avantaje 
- Tarife 
- Formular de rezervare 
- Galerie 
- Recenzii 
- Footer

## Elemente interactive

- Toate linkurile își schimbă culoarea textului la trecerea cursorului;
- Toate butoanele își schimbă culoarea de fundal la trecerea cursorului;
- Încărcarea paginii este implementată în modul "smooth";
- Cardurile secțiunilor "Despre noi" și "Avantaje" au efecte de mărire și umbră la trecerea cursorului;
- Imaginea principală a secțiunii "Galerie" se schimbă la clic;
- La trecerea cursorului peste cardurile secțiunii "Recenzii" apare un efect interactiv de evidențiere;
- Meniul mobil apare și dispare cu ajutorul butoanelor corespunzătoare.
## Cerințe tehnice

- [x] Layout-ul este adaptiv, cu excepția dispozitivelor mobile. Puncte de ruptură:
  - **mobile:** layout fluid de la 320 px, devine adaptiv de la 375 px
  - **tablet:** de la 768 px
  - **desktop:** de la 1440 px
- [x] Layout-ul este valid ([W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/))
- [x] Respectarea semanticii conform standardelor HTML5
- [x] Conectarea fonturilor
- [x] Optimizarea dimensiunilor graficii vectoriale și raster
- [x] Suport pentru afișarea imaginilor pe ecrane retina
- [x] Încărcare optimizată a imaginilor
- [x] Toate iconițele SVG sunt conectate prin sprite
- [x] A fost adăugat favicon-ul paginii
- [x] Efectele elementelor clicabile sunt stilizate conform UI Kit; pentru `hover` a fost adăugată schimbarea cursorului
## Echipa noastră
- [@vladbondarenko09](https://www.github.com/vladbondarenko09)
- [@andrii-borysiak](https://www.github.com/andrii-borysiak)
- [@kvoytikh](https://www.github.com/kvoytikh)
- [@alekseypr6548-hu](https://www.github.com/alekseypr6548-hub)
- [@DmytroPempus](https://www.github.com/DmytroPempus)
- [@tskitsune](https://www.github.com/tskitsune)
- [@tetiana8989](https://www.github.com/tetiana8989)
- [@myudd](https://www.github.com/myudd)



## Cum se lucrează cu repozitoriul

Ramura main este protejată, push-ul direct este interzis.

```bash
git clone git@github.com:myudd/RealityShift_by_team2.git
cd RealityShift_by_team2

git switch -c feature/numele-secțiunii     # 1. propria ramură
git add .
git commit -m "feat: adăugată secțiunea de jocuri" # 2. commit-uri
git push -u origin feature/numele-secțiunii  # 3. push al ramurii
```
Apoi pe GitHub: Pull Request → recenzie din partea altui participant → Merge.

Înainte de a încăpe lucrul, actualizați întotdeauna main:

```bash
git switch main && git pull
```

