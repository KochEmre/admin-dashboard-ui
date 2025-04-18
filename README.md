# Modern Admin Dashboard UI

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat-square&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat-square&logo=vite" alt="Vite">
</p>

Modern Admin Dashboard UI, yönetim panelleri için geliştirilmiş modern, duyarlı (responsive) ve kullanıcı dostu bir arayüz şablonudur. React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş bu proje, modern web uygulamaları için güçlü bir başlangıç noktası sunmaktadır.

## 🌟 Özellikler

- **Modern ve Temiz Tasarım**: Kullanıcı dostu, estetik ve profesyonel görünüm
- **Tam Duyarlı (Responsive) Tasarım**: Mobil cihazlardan masaüstü ekranlara kadar tüm cihazlarda mükemmel görünüm
- **Karanlık Mod Desteği**: Kullanıcı tercihine göre otomatik veya manuel olarak değiştirilebilen aydınlık/karanlık tema
- **Veri Görselleştirme**: Grafikler ve tablolar ile veri görselleştirme bileşenleri
- **Modüler Yapı**: Kolayca genişletilebilir ve özelleştirilebilir bileşen mimarisi
- **Performans Odaklı**: Vite ile hızlı geliştirme ve derleme süreçleri
- **TypeScript Desteği**: Tip güvenliği ve daha iyi geliştirici deneyimi
- **Özelleştirilebilir Bileşenler**: Projenize uygun şekilde kolayca özelleştirilebilen UI bileşenleri

## 🛠️ Kullanılan Teknolojiler

- **Frontend Framework**: React 18.3.1
- **Dil**: TypeScript 5.5.3
- **CSS Framework**: Tailwind CSS 3.4.1
- **Build Tool**: Vite 5.4.2
- **Routing**: React Router 6.25.1
- **Icons**: Lucide React 0.344.0
- **Kod Kalitesi**: ESLint 9.9.1

## 📋 Sayfa ve Bileşenler

### Sayfalar
- **Dashboard**: Genel bakış, istatistikler ve özet veriler
- **Analytics**: Detaylı analiz grafikleri ve raporlar
- **Customers**: Müşteri yönetimi ve listeleme
- **Products**: Ürün yönetimi ve listeleme
- **Settings**: Uygulama ayarları ve yapılandırma

### Temel Bileşenler
- **Layout**: Ana sayfa düzeni (Header, Sidebar ve içerik alanı)
- **Sidebar**: Navigasyon menüsü
- **Header**: Üst bilgi çubuğu, arama ve kullanıcı menüsü
- **ThemeToggle**: Aydınlık/karanlık tema geçişi
- **StatCard**: İstatistik kartları
- **ChartPlaceholder**: Grafik gösterimi için yer tutucu
- **DataTablePlaceholder**: Veri tabloları için yer tutucu
- **Button, Card, Input, Label**: Temel UI bileşenleri

## 🚀 Başlangıç

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### Kurulum

1. Repository'yi klonlayın
   ```bash
   git clone https://github.com/YOUR_USERNAME/modern-admin-dashboard-ui.git
   cd modern-admin-dashboard-ui
   ```

2. Bağımlılıkları yükleyin
   ```bash
   npm install
   # veya
   yarn
   ```

3. Geliştirme sunucusunu başlatın
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

4. Tarayıcınızı açın ve `http://localhost:5173` adresine gidin

## 📦 Üretime Hazırlama

```bash
npm run build
# veya
yarn build
```

Derlenen dosyalar `dist` klasöründe oluşturulacaktır. Bu dosyaları herhangi bir statik dosya sunucusuna yükleyebilirsiniz.

## 🔧 Özelleştirme

### Tema Özelleştirme

Tema renkleri ve diğer tasarım değişkenleri `src/index.css` dosyasında CSS değişkenleri olarak tanımlanmıştır. Bu değişkenleri düzenleyerek uygulamanın görünümünü özelleştirebilirsiniz.

### Bileşen Özelleştirme

Tüm UI bileşenleri `src/components/ui` klasöründe bulunmaktadır. Bu bileşenleri projenizin ihtiyaçlarına göre düzenleyebilirsiniz.

## 📄 Lisans

MIT
