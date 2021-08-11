# 参考

https://github.com/clerkinc/clerk-nextjs-starter

# 初期セットアップ

## Next.js

```
yarn create next-app . --typescript
```

## clerk

```
yarn add @clerk/clerk-react
yarn add @clerk/clerk-sdk-node
```

# tailwind css インストール

yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p

# tailwind.config.js 修正

```
mode: "jit",
purge: ["./src/**/*.{js,ts,jsx,tsx}"],
```

# globals.css 修正

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# 必要 module のインストール

```
yarn add -D eslint-plugin-simple-import-sort
yarn add -D prettier
yarn add -D eslint-config-prettier
yarn add -D @typescript-eslint/eslint-plugin
yarn add -D @typescript-eslint/parser
yarn add -D eslint-plugin-tailwindcss
yarn add -D @jarrodldavis/eslint-plugin-tailwindcss@latest
yarn add -D prettier-plugin-tailwind
```
