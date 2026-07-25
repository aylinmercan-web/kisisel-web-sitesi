# Kişisel Web Sitesi

Workintech Frontend Sprint Challenge kapsamında geliştirilen kişisel portföy sitesi. React + Vite + Tailwind CSS ile kurulmuştur.

## Özellikler

- Section bazlı component mimarisi (Navbar, Hero, Skills, Profile, Projects, Contact)
- Context API ile global dil (TR/EN) ve tema (light/dark) yönetimi — i18n paketi kullanılmadı
- Tercihler `useLocalStorage` custom hook'u ile localStorage'da saklanır
- Tailwind CSS ile responsive tasarım (mobil, tablet, masaüstü) ve `dark:` varyantlarıyla dark mode
- react-toastify ile kullanıcı geri bildirimi
- axios ile `https://reqres.in/api/workintech` adresine POST isteği (iletişim formu)
- Statik veri `src/data/content.json` üzerinden `map` ile render edilir

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

## Build

```bash
npm run build
npm run preview
```

## Testler

```bash
npm run test
```

Vitest + React Testing Library ile yazılmış testler: `useLocalStorage` hook'u, `ThemeContext` (dark mode toggle + localStorage), `Navbar` (dil değişimi). Testler `*.test.js` / `*.test.jsx` adıyla ilgili dosyanın yanında yer alır.

## Kendi bilgilerinle güncelleme

- `src/data/content.json`: isim, hakkımda metni, doğum tarihi, şehir, eğitim, proje açıklamaları (TR/EN)
- `src/data/previousProjects.json`: daha önce Vercel'e deploy ettiğin diğer projelerin `{ "name": "...", "url": "..." }` listesi
- `src/components/Hero.jsx` ve `src/components/Projects.jsx`: görsel URL'lerini kendi fotoğraf/proje görsellerinle değiştir
- Github/LinkedIn/e-posta linklerini `Navbar.jsx`, `Hero.jsx`, `Contact.jsx` içinde güncelle

## Deploy (Vercel)

1. Projeyi GitHub'a push et.
2. [vercel.com](https://vercel.com) üzerinden GitHub reposunu import et.
3. Framework preset: **Vite** (otomatik algılanır). Build command: `npm run build`, Output directory: `dist`.
4. Deploy sonrası verilen linki README'ye ve sunumuna ekle.
