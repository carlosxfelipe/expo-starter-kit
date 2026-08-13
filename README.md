# Expo Starter Kit

Este projeto é um template de inicialização (starter kit) configurado para desenvolvimento multiplataforma (iOS, Android e Web) utilizando Expo.

## Como utilizar este template em um novo projeto

1. **Crie um novo projeto Expo:**

   ```bash
   npx create-expo-app@latest meu-projeto
   ```

2. **Instale a biblioteca de ícones:**
   Como o componente de ícones deste template utiliza a biblioteca modular `@react-native-vector-icons`, instale a dependência no novo projeto:

   ```bash
   npx expo install @react-native-vector-icons/material-design-icons
   ```

3. **Configure a estrutura de pastas:**
   - Apague a pasta `src` que foi gerada por padrão no seu novo projeto.
   - Copie a pasta `src` deste template (`expo-starter-kit`) e cole-a na raiz do seu novo projeto.

## Como rodar o projeto

Se você acabou de criar o projeto e ainda não adicionou os scripts recomendados, utilize os comandos padrão:

```bash
npm run android
npm run ios
npm run web
```

Caso **já tenha adicionado os scripts recomendados** (veja a seção abaixo), você pode usar:

- **No Expo Go** (sem build nativa): `npm run android:go` ou `npm run ios:go`
- **Build nativa** (compilação completa): `npm run android` ou `npm run ios`

## Customização da Tab Bar (iOS)

Este template inclui por padrão uma tab bar nativa com efeito translúcido (liquid glass) exclusiva para o iOS.
Caso você não queira utilizar esse efeito nativo e prefira o fallback tradicional do Expo Router (o mesmo que roda no Android), basta abrir o arquivo `src/app/_layout.tsx` e apagar o seguinte bloco de código:

```tsx
  if (Platform.OS === "ios") {
    return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        <IosNativeTabs colors={colors} />
      </ThemeProvider>
    );
  }
```

## Scripts recomendados

Adicione os seguintes scripts ao `package.json` do seu novo projeto:

```json
"scripts": {
  "start": "expo start",
  "reset-project": "node ./scripts/reset-project.js",
  "android": "expo run:android",
  "android:go": "expo start --android",
  "ios": "expo run:ios",
  "ios:go": "expo start --ios",
  "web": "expo start --web",
  "lint": "expo lint",
  "format": "npx prettier@latest --write \"src/**/*.{ts,tsx,js,jsx,json,md}\"",
  "build:android": "npx expo prebuild --platform android && cd android && ./gradlew assembleRelease && cd .. && mkdir -p apk && cp android/app/build/outputs/apk/release/app-release.apk \"apk/$npm_package_name-v$npm_package_version.apk\""
}
```

- **`android` / `ios`** — compila e roda o app nativamente (`expo run`).
- **`android:go` / `ios:go`** — inicia o servidor Expo apontando para a plataforma, sem recompilar.
- **`format`** — formata os arquivos do projeto (`packages/` e `src/`) usando o Prettier.
- **`build:android`** — gera o APK de release e o copia para a pasta `apk/` com nome e versão do `package.json`.
