# ESTÜRONOT - Ortalama Hesaplama Sitesi 🚀

<img width="1919" height="968" alt="estüronot" src="https://github.com/user-attachments/assets/afa80ef1-b293-4970-9523-a3908080d25f" />

## 📖 Genel Bakış
ESTÜRONOT, Eskişehir Teknik Üniversitesi öğrencileri için geliştirilmiş, uzay temalı bir ortalama hesaplama sitesidir. Bu web uygulaması, öğrencilerin ders notlarını girerek dönem ortalamalarını ve genel not ortalamalarını (GNO) kolayca hesaplamalarına olanak tanır. Kullanıcı dostu arayüzü ve uzay temalı tasarımı ile hem işlevsel hem de eğlenceli bir deneyim sunar. 🌌

Bu proje özellikle şu amaçlar için uygundur:
- **Öğrenci Not Takibi**: Ders notlarını girerek hızlıca ortalama hesaplama.
- **Kullanıcı Dostu Arayüz**: Basit ve sezgisel tasarım, her seviyeden kullanıcı için kolaylık sağlar.
- **Eğitim Amaçlı**: Web geliştirme (HTML, CSS, JavaScript) ve veri işleme konularında örnek bir proje.

Proje, tamamen istemci tarafında çalışan bir web uygulamasıdır ve herhangi bir sunucu veya veritabanı gerektirmez. Yerel olarak tarayıcıda çalışır ve öğrencilerin notlarını güvenli bir şekilde hesaplar. 🚀

## ✨ Temel Özellikler
- **Ders Ekleme/Silme**: Kullanıcılar derslerini dinamik olarak ekleyip çıkarabilir. 📚
- **Not ve Kredi Girişi**: Her ders için not ve kredi bilgileri kolayca girilebilir.
- **Ortalama Hesaplama**: Dönem ortalaması ve genel not ortalamasını (GNO) otomatik hesaplar. 📊
- **Uzay Temalı Tasarım**: Galaksi ve astronot motifleriyle görsel olarak çekici bir arayüz. 🌠
- **Responsive Tasarım**: Mobil ve masaüstü cihazlarda sorunsuz çalışır. 📱💻
- **Hata Kontrolü**: Geçersiz not girişlerinde kullanıcıyı uyaran hata mesajları. ⚠️
- **Yerel Depolama (Opsiyonel)**: Notlar tarayıcıda kaydedilebilir, böylece tekrar giriş yapmaya gerek kalmaz. 💾
- **Kişiselleştirme**: Tema renkleri ve yazı tipleri uzay estetiğine uygun şekilde özelleştirilmiştir.

## 📋 Gereksinimler
ESTÜRONOT, modern bir web tarayıcısında çalışır ve ek yazılım gerektirmez. Aşağıdaki gereksinimlere dikkat edin:

### Yazılım Gereksinimleri:
- **Modern Web Tarayıcısı**: Chrome, Firefox, Edge veya Safari (en son sürümler önerilir).
- **JavaScript Etkin**: Tarayıcıda JavaScript'in açık olması gerekir.
- **İnternet Bağlantısı (Opsiyonel)**: CDN üzerinden yüklenen kütüphaneler için (örn. Tailwind CSS). Çevrimdışı çalışması için dosyalar yerel olarak indirilebilir.

### Donanım Gereksinimleri:
- Herhangi bir modern bilgisayar, tablet veya akıllı telefon.
- Minimum ekran çözünürlüğü: 320x480 (mobil uyumluluk için).

## 🛠️ Kurulum
Projeyi yerel makinenizde çalıştırmak veya GitHub'da paylaşmak için aşağıdaki adımları izleyin:

1. **Depoyu Klonlayın**:
   ```bash
   git clone https://github.com/yunuseemredogan/ESTU-Ortalama-Hesaplama-Sitesi.git
   cd esturonot
   ```
   Bu, projenin tüm dosyalarını (HTML, CSS, JavaScript) indirir.

2. **Yerel Sunucu ile Çalıştırma (Opsiyonel)**:
   Geliştirme için bir yerel sunucu kullanabilirsiniz:
   ```bash
   python -m http.server 8000
   ```
   Ardından tarayıcınızda `http://localhost:8000` adresine gidin.

3. **Doğrudan Açma**:
   `index.html` dosyasını bir tarayıcıda doğrudan açabilirsiniz. Ancak, bazı CDN kütüphaneleri için internet bağlantısı gerekebilir.

## ▶️ Kullanım
Uygulamayı çalıştırmak oldukça basittir:

1. **Siteyi Açın**:
   Tarayıcınızda `index.html` dosyasını açın veya yerel sunucuyu başlatın.

2. **Ders Ekleme**:
   - "Ders Ekle" butonuna tıklayarak yeni bir ders girişi oluşturun.
   - Ders adı, harf notu (AA-FF arası) ve kredi (ör. 3) bilgilerini girin.

3. **Ortalama Hesaplama**:
   - Tüm dersleri girdikten sonra "Hesapla" butonuna tıklayın.
   - Dönem ortalaması ve GNO ekranda gösterilecektir.

4. **Sonuçları Kaydetme (Opsiyonel)**:
   - Yerel depolama özelliği varsa, notlar tarayıcıda kaydedilir ve bir sonraki ziyarette geri yüklenebilir.

5. **Sonuçları Sıfırlama**:
   - "Temizle" butonu ile tüm girişleri sıfırlayabilirsiniz.

**İpucu**: Mobil cihazlarda da sorunsuz çalışır, ancak en iyi deneyim için masaüstü tarayıcı önerilir.

## 🔍 Nasıl Çalışır: İç Mekanizmalar
ESTÜRONOT, istemci tarafında çalışan bir JavaScript uygulamasıdır. İşte detaylı bir işleyiş açıklaması:

### Genel İş Akışı (ASCII Diyagramı):
```
+-------------------+   Veri   +-------------------+   Hesaplama  +----------------------+
| Kullanıcı Arayüzü | -------> | Ders Verileri     | -----------> | Ortalama Hesaplama   |
| (HTML + Tailwind) |          | (JavaScript Obj.) |              | (Ağırlıklı Ortalama) |
+-------------------+          +-------------------+              +----------------------+
  |                                         |                          |
  v                                         v                          v
Görsel Güncellemeler                    Yerel Depolama              Hata Mesajları
```

1. **Başlatma**:
   - HTML ve Tailwind CSS ile uzay temalı arayüz oluşturulur.
   - JavaScript, ders verilerini saklamak için bir dizi kullanır.

2. **Ders Girişi**:
   - Kullanıcı, ders adı, not ve kredi bilgilerini forma girer.
   - JavaScript, her girişi doğrular (örn. harf notu AA-FF arasında olmalı).

3. **Hesaplama**:
   - Ağırlıklı ortalama formülü: `(Σ(not * kredi)) / Σ(kredi)`.
   - Sonuçlar, ondalık hassasiyetle (örn. 2 basamak) gösterilir.

4. **Yerel Depolama (Opsiyonel)**:
   - `localStorage` kullanılarak ders verileri tarayıcıda saklanır.
   - Kullanıcı siteyi tekrar açtığında veriler geri yüklenir.

5. **Hata Yönetimi**:
   - Geçersiz girişler için uyarı mesajları gösterilir (örn. "Harf notu AA-FF arasında olmalı").

## 🧱 Kod Yapısı
Proje, basitlik için tek bir HTML dosyası ve ek JavaScript/CSS dosyalarından oluşur:

- **index.html**: Ana sayfa, Tailwind CSS ve JavaScript dosyalarını içerir.
- **still.css**: Uzay temalı özelleştirmeler (isteğe bağlı, Tailwind ile inline stil kullanılabilir).
- **print.js**: Ders yönetimi, hesaplama ve yerel depolama mantığı.
- **Toplam Satır**: Yaklaşık 200-300, açıklayıcı yorumlarla birlikte.

## ⚠️ Sorun Giderme
- **Sayfa Yüklenmiyor**: Tarayıcıda JavaScript'in açık olduğundan emin olun.
- **Hatalı Hesaplama**: Not veya kredi girişlerini kontrol edin; geçersiz değerler hata üretir.
- **Mobil Uyumluluk Sorunları**: Tarayıcıyı güncelleyin veya farklı bir cihaz deneyin.
- **Yerel Depolama Çalışmıyor**: Tarayıcı ayarlarında `localStorage` iznini kontrol edin.

## 📉 Sınırlamalar
- Sunucu tabanlı veri saklama yoktur; tüm veriler yerel tarayıcıda saklanır.
- Karmaşık not sistemleri (örn. harf notu dönüşümleri) henüz desteklenmez.
- İnternet bağlantısı olmadan CDN kütüphaneleri yüklenmeyebilir.

## 🤝 Katkıda Bulunma
Depoyu fork edin, değişiklikler yapın ve bir Pull Request gönderin! Öneriler: Harf notu desteği, daha fazla tema seçeneği veya çevrimdışı çalışma desteği.

## 📜 Lisans
MIT Lisansı - Kullanabilir, değiştirebilir ve paylaşabilirsiniz. [LICENSE](LICENSE) dosyasına bakın.

*2025'te Eskişehir Teknik Üniversitesi öğrencileri için ❤️ ile geliştirildi. Soru veya geri bildirim için bir issue açın!*
