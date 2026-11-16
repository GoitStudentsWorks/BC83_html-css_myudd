
# Reality Shift Project by Team#2

Landing page (business card website) for a VR club based on a ready-made design. 

- Interface language: Ukrainian
- Responsiveness: 375 px, 768 px, 1440 px (ready-made designs created in Figma)


## Technologies

 - HTML5 
 - CSS3 (Flexbox, variables)
 - JS (event listeners and styles) 
 - Git / GitHub 
 - Figma 
 - GitHub Pages


## Page structure



- Header 
- Hero 
- About us and games 
- Benefits 
- Pricing 
- Booking form 
- Gallery 
- Reviews 
- Footer

## Interactive elements

- All links change their text color on hover;
- All buttons change their background color on hover;
- Page loading is implemented as "smooth";
- The cards of the "About us" and "Benefits" sections have zoom and shadow effects on hover;
- The main image of the "Gallery" section changes on click;
- When hovering over the cards of the "Reviews" section, an interactive highlight effect appears;
- The mobile menu appears and disappears using the corresponding buttons.
## Technical requirements

- [x] The layout is responsive, except for mobile devices. Breakpoints:
  - **mobile:** fluid layout from 320 px, becomes adaptive from 375 px
  - **tablet:** from 768 px
  - **desktop:** from 1440 px
- [x] The layout is valid ([W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/))
- [x] Semantics comply with HTML5 standards
- [x] Fonts are connected
- [x] Optimization of vector and raster graphics sizes
- [x] Support for displaying images on retina screens
- [x] Optimized image loading
- [x] All SVG icons are connected via sprite
- [x] Page favicon added
- [x] Effects of clickable elements are styled according to the UI Kit; a cursor change is added for `hover`
## Our team
- [@vladbondarenko09](https://www.github.com/vladbondarenko09)
- [@andrii-borysiak](https://www.github.com/andrii-borysiak)
- [@kvoytikh](https://www.github.com/kvoytikh)
- [@alekseypr6548-hu](https://www.github.com/alekseypr6548-hub)
- [@DmytroPempus](https://www.github.com/DmytroPempus)
- [@tskitsune](https://www.github.com/tskitsune)
- [@tetiana8989](https://www.github.com/tetiana8989)
- [@myudd](https://www.github.com/myudd)



## How to work with the repository

The main branch is protected, direct push is prohibited.

```bash
git clone git@github.com:myudd/RealityShift_by_team2.git
cd RealityShift_by_team2

git switch -c feature/section-name     # 1. your own branch
git add .
git commit -m "feat: added games section" # 2. commits
git push -u origin feature/section-name  # 3. push the branch
```
Next on GitHub: Pull Request → review by another team member → Merge.

Always update main before starting work:

```bash
git switch main && git pull
```

