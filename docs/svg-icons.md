# Ícones SVG no Expo SDK 56

## Contexto

A partir do SDK 56, `@expo/vector-icons` foi **depreciado** e não é mais incluído automaticamente pelo pacote `expo`. O novo padrão são os pacotes escopados `@react-native-vector-icons/*`, um por família de ícones.

## Instalação

Instale apenas as famílias que for usar:

```bash
# Material Community Icons (mais completo, recomendado)
npm install @react-native-vector-icons/material-community-icons

# Material Design Icons
npm install @react-native-vector-icons/material-design-icons

# Ionicons
npm install @react-native-vector-icons/ionicons

# FontAwesome 6
npm install @react-native-vector-icons/fontawesome6

# Feather
npm install @react-native-vector-icons/feather

# Ant Design Icons
npm install @react-native-vector-icons/ant-design

# Instalar vários de uma vez
npm install \
  @react-native-vector-icons/material-community-icons \
  @react-native-vector-icons/ionicons \
  @react-native-vector-icons/feather
```

## Uso

```tsx
import MaterialCommunityIcons from '@react-native-vector-icons/material-community-icons';
import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

// Em um componente
<MaterialCommunityIcons name="home" size={24} color="#000" />
<Ionicons name="settings-outline" size={24} color="#000" />
<Feather name="search" size={24} color="#000" />
```

## Uso nos Tabs (Expo Router)

```tsx
import MaterialCommunityIcons from '@react-native-vector-icons/material-community-icons';

<Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="home-outline" size={size} color={color} />
    ),
  }}
/>
```

## Explorar ícones disponíveis

- **Material Community Icons**: https://pictogrammers.com/library/mdi/
- **Ionicons**: https://ionic.io/ionicons
- **Feather**: https://feathericons.com
- **FontAwesome 6**: https://fontawesome.com/icons
- **Todos os pacotes disponíveis**: https://github.com/oblador/react-native-vector-icons

## Migração de projeto existente

Se você tinha `@expo/vector-icons` ou `react-native-vector-icons` antigo, use o codemod oficial:

```bash
# Commit antes de rodar!
npx @react-native-vector-icons/codemod
```

O codemod atualiza imports e `package.json` automaticamente.
