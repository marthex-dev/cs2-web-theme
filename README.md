## CS2 Jailbreak & ProPublic Teması

Bu proje, GameTracker verilerini kullanarak anlık olarak aşağıdaki bilgileri görüntülemeyi amaçlar:

- **Harita Bilgileri:** Aktif harita, oyun modu, vs.
- **Oyuncu Sayısı:** Anlık oyuncu sayısı.
- **Oyuncu Listesi:** Aktif oyuncuların listesi.
- **Sunucu IP Adresi:** Sunucunun erişim bilgileri.

Bu bilgileri alabilmek için discord üzerinden benden JSON dosyası almanız gerekmektedir. https://marthex.dev/ üzerinden discorduma katılarak hızlıca alabilirsiniz.

Demo: https://marthex.dev/cs2/
---

## Gereksinimler

- **Node.js:** Projeyi çalıştırmak için [Node.js](https://nodejs.org/) gereklidir.
- **Visual Studio Code (VS Code):** Geliştirme ortamı olarak [VS Code](https://code.visualstudio.com/) önerilir.
---

## Kurulum

1. **Dosyaların İndirilmesi:**
   - GitHub üzerinden projeyi klonlayın ya da ZIP dosyası olarak indirin.
   - İndirilen dosyayı VS Code ile açın.

2. **Bağımlılıkların Yüklenmesi:**
   - VS Code terminalinde aşağıdaki komutu çalıştırarak gerekli modülleri indirin:
     ```bash
     npm i
     ```

---

## Çalıştırma

- **Geliştirme Modu:**
  - Projeyi yerel sunucuda çalıştırmak ve geliştirme sürecinde anlık güncellemeleri görmek için terminalde aşağıdaki komutu kullanın:
    ```bash
    npm start
    ```
  - Bu komut, projenin geliştirme ortamında sorunsuz çalışmasını sağlar.

- **Build İşlemi & Yayınlama:**
  - Projeyi yayınlamak için derlemek isterseniz, terminalde şu komutu çalıştırın:
    ```bash
    npm run build
    ```
  - Build işlemi tamamlandığında, proje dosyaları `build` klasörü altında toplanır.
  - Elde edilen `build` klasörünü, tercih ettiğiniz bir web hosting servisine aktararak temayı yayınlayabilirsiniz.

---

## Tema Yapılandırması & Özelleştirme

- **Yapılandırma:**
  - components klasörü içindeki dosyalardan yazıları ve ayarları değiştirebilirsiniz.
---

## Katkıda Bulunma

- Projeye katkıda bulunmak isteyenler, discord üzerinden bildirerek destek olabilir.
- Kod standardı ve dokümantasyonun güncel tutulması, projenin sürdürülebilirliği açısından büyük önem taşımaktadır.

---

## Lisans

- Bu proje, açık kaynak lisansı altında sunulmaktadır.

