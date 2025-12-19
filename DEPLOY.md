# Deploy Design System to GitHub Pages

Hướng dẫn deploy Design System preview lên GitHub Pages.

## Cách 1: Deploy thủ công (Nhanh nhất)

### Bước 1: Build static files

```bash
npm run build:preview
```

### Bước 2: Deploy lên GitHub Pages

```bash
# Cài đặt gh-pages (chỉ cần làm 1 lần)
npm install -D gh-pages

# Deploy
npm run deploy:gh-pages
```

Hoặc deploy trực tiếp:
```bash
npx gh-pages -d dist-preview
```

### Bước 3: Cấu hình GitHub Pages

1. Vào repository Settings > Pages
2. Source: Chọn branch `gh-pages` và folder `/ (root)`
3. Save

### Bước 4: Truy cập

Sau vài phút, Design System sẽ có sẵn tại:
- `https://[username].github.io/[repo-name]/`

Ví dụ: `https://xizot.github.io/share-ui/`

## Cách 2: Tự động deploy với GitHub Actions

Đã có sẵn workflow tại `.github/workflows/deploy-preview.yml`

### Bước 1: Enable GitHub Pages

1. Vào repository Settings > Pages
2. Source: Chọn "GitHub Actions"
3. Save

### Bước 2: Push code

Mỗi khi push code lên branch `main`, GitHub Actions sẽ tự động:
- Build preview site
- Deploy lên GitHub Pages

## Cấu hình Base Path

**Mặc định base path là `/share-ui/`** (đã được cấu hình sẵn).

### Nếu repo name khác:

Set environment variable khi build:
```bash
GITHUB_REPO_NAME=your-repo-name npm run build:preview
```

### Nếu deploy lên root domain (username.github.io):

```bash
npm run build:preview:root
```

Hoặc sửa trực tiếp trong `vite.config.preview.ts`:
```typescript
const base = '/your-repo-name/'; // hoặc '/' cho root domain
```

## Troubleshooting

### 404 Error khi truy cập

- **Đảm bảo đã rebuild với base path đúng**: `npm run build:preview`
- Kiểm tra base path trong `vite.config.preview.ts` (mặc định: `/share-ui/`)
- Đảm bảo GitHub Pages đã được enable
- Kiểm tra branch `gh-pages` đã được tạo

### Assets không load (ERR_ABORTED 404)

- **Nguyên nhân**: Base path không đúng với repo name
- **Giải pháp**: 
  1. Rebuild với base path đúng: `npm run build:preview`
  2. Kiểm tra trong `dist-preview/index.html` - paths phải bắt đầu với `/share-ui/`
  3. Redeploy: `npm run deploy:gh-pages`

### Build failed

- Kiểm tra Node.js version (cần >= 18)
- Xóa `node_modules` và `dist-preview`, chạy lại `npm install`

## Scripts có sẵn

- `npm run build:preview` - Build preview site
- `npm run deploy:gh-pages` - Build và deploy tự động
- `npm run preview:design` - Preview local sau khi build

