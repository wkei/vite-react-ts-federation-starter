# vite-react-ts-federation-starter

## Tech Stack

- pnpm
- react
- typescript
- vite
- vite-plugin-federation

```
.
├── apps
│  ├── container
│  │  ├── index.html
│  │  ├── package.json
│  │  ├── src
│  │  │  ├── App.tsx
│  │  │  ├── main.tsx
│  │  │  └── vite-env.d.ts
│  │  ├── tsconfig.json
│  │  └── vite.config.ts
│  └── subapp
│     ├── index.html
│     ├── package.json
│     ├── src
│     │  ├── App.tsx
│     │  ├── main.tsx
│     │  └── vite-env.d.ts
│     ├── tsconfig.json
│     └── vite.config.ts
├── package.json
├── pnpm-lock.yaml
└── tsconfig.base.json
```

## Install packages

```
pnpm install
```

## Dev the entire app

```
pnpm start
```

## Dev a specific app

1. Go in to the `apps/*` folder and run `pnpm dev`

2. run `pnpm --filter apps/<foldername> dev`

3. npm script shortcuts:

```
pnpm dev:container
pnpm dev:subapp
```

## Build

```
pnpm build
```

The final build will be in `./dist`

## Preview the build

```
pnpm preview
```
