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
