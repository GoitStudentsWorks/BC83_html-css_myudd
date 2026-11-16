
# Reality Shift Project by Team#2

Hazır bir tasarıma göre hazırlanmış, VR kulübü için tanıtım amaçlı açılış sayfası (landing page). 

- Arayüz dili: Ukraynaca
- Uyumluluk: 375 px, 768 px, 1440 px (Figma'da hazırlanmış hazır tasarımlar)


## Teknolojiler

 - HTML5 
 - CSS3 (Flexbox, değişkenler)
 - JS (olay dinleyicileri ve stiller) 
 - Git / GitHub 
 - Figma 
 - GitHub Pages


## Sayfa yapısı



- Header 
- Hero 
- Hakkımızda ve oyunlar 
- Avantajlar 
- Fiyatlar 
- Rezervasyon formu 
- Galeri 
- Yorumlar 
- Footer

## Etkileşimli öğeler

- Tüm bağlantılar üzerine gelindiğinde metin rengini değiştirir;
- Tüm düğmeler üzerine gelindiğinde arka plan rengini değiştirir;
- Sayfa yüklemesi "smooth" olarak uygulanmıştır;
- "Hakkımızda" ve "Avantajlar" bölümlerinin kartları üzerine gelindiğinde büyüme ve gölge efektlerine sahiptir;
- "Galeri" bölümünün ana görseli tıklandığında değişir;
- "Yorumlar" bölümünün kartlarının üzerine gelindiğinde etkileşimli vurgulama efekti belirir;
- Mobil menü ilgili düğmeler yardımıyla açılır ve kapanır.
## Teknik gereksinimler

- [x] Sayfa düzeni, mobil cihazlar hariç, uyumludur. Kırılma noktaları:
  - **mobile:** 320 px'ten itibaren akışkan düzen, 375 px'ten itibaren uyarlanabilir hale gelir
  - **tablet:** 768 px'ten itibaren
  - **desktop:** 1440 px'ten itibaren
- [x] Sayfa düzeni geçerlidir ([W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/))
- [x] HTML5 standartlarına uygun semantik kullanılmıştır
- [x] Yazı tipleri bağlanmıştır
- [x] Vektörel ve rastersel grafiklerin boyutları optimize edilmiştir
- [x] Retina ekranlar için görsellerin gösterimi desteklenir
- [x] Görseller optimize edilmiş şekilde yüklenir
- [x] Tüm SVG simgeleri sprite üzerinden bağlanmıştır
- [x] Sayfa favicon'u eklenmiştir
- [x] Tıklanabilir öğelerin efektleri UI Kit'e uygun şekilde stillendirilmiştir; `hover` için imleç değişimi eklenmiştir
## Ekibimiz
- [@vladbondarenko09](https://www.github.com/vladbondarenko09)
- [@andrii-borysiak](https://www.github.com/andrii-borysiak)
- [@kvoytikh](https://www.github.com/kvoytikh)
- [@alekseypr6548-hu](https://www.github.com/alekseypr6548-hub)
- [@DmytroPempus](https://www.github.com/DmytroPempus)
- [@tskitsune](https://www.github.com/tskitsune)
- [@tetiana8989](https://www.github.com/tetiana8989)
- [@myudd](https://www.github.com/myudd)



## Depo ile nasıl çalışılır

main dalı korumalıdır, doğrudan push yasaktır.

```bash
git clone git@github.com:myudd/RealityShift_by_team2.git
cd RealityShift_by_team2

git switch -c feature/bölüm-adı     # 1. kendi dalınız
git add .
git commit -m "feat: oyunlar bölümü eklendi" # 2. commit işlemleri
git push -u origin feature/bölüm-adı  # 3. dalı gönderin
```
Ardından GitHub'da: Pull Request → başka bir katılımcının incelemesi → Merge.

Çalışmaya başlamadan önce main dalını her zaman güncelleyin:

```bash
git switch main && git pull
```

