import { useFonts } from "expo-font";
import { DarkTheme, DefaultTheme, Slot, useRouter, usePathname, ThemeProvider, Tabs } from "expo-router";
import { View, Pressable, StyleSheet, useWindowDimensions } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { Icon } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

// Width threshold to consider a screen as a large screen (Tablet/Desktop)
const BREAKPOINT = 768;

export default function WebLayout() {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const scheme = colorScheme === "unspecified" ? "light" : (colorScheme ?? "light");
  const colors = Colors[scheme];
  const router = useRouter();
  const pathname = usePathname();

  const [fontsLoaded] = useFonts({
    MaterialDesignIcons: require("@react-native-vector-icons/material-design-icons/fonts/MaterialDesignIcons.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const isDesktop = width >= BREAKPOINT;

  // Scenario 1: Small screens (Mobile Web) -> Keep the Bottom Navigation Bar identical to the native app
  if (!isDesktop) {
    return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        <Tabs
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
              fontWeight: "600",
              fontSize: 17,
            },
            headerShadowVisible: false,
            headerTitleAlign: "center",
            tabBarStyle: {
              backgroundColor: colors.background,
              borderTopColor: colors.backgroundElement,
            },
            tabBarActiveTintColor: colors.text,
            tabBarInactiveTintColor: colors.textSecondary,
          }}
        >
          <Tabs.Screen name="index" options={{ href: null }} />
          <Tabs.Screen
            name="(home)"
            options={{
              headerShown: false,
              title: "Home",
              tabBarIcon: ({ color, focused }) => (
                <Icon
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={color as string}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="(menu)"
            options={{
              headerShown: false,
              title: "Menu",
              tabBarIcon: ({ color, focused }) => (
                <Icon
                  name={focused ? "menu" : "menu"}
                  size={24}
                  color={color as string}
                />
              ),
            }}
          />
        </Tabs>
      </ThemeProvider>
    );
  }

  // Scenario 2: Large screens (Desktop/Tablet) -> Top Navbar
  const navItems = [
    { name: "Home", path: "/(home)", icon: "home" },
    { name: "Menu", path: "/(menu)", icon: "menu" },
  ] as const;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {/* Top Navbar */}
        <View style={[styles.navbar, { backgroundColor: colors.background, borderBottomColor: colors.backgroundElement }]}>
          <View style={styles.logoContainer}>
            <ThemedText style={styles.logoText}>Expo Starter</ThemedText>
          </View>
          <View style={styles.navLinks}>
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.path);
              return (
                <Pressable
                  key={item.path}
                  onPress={() => router.push(item.path)}
                  style={({ hovered }) => [
                    styles.navItem,
                    isActive && { borderBottomColor: colors.text },
                    !isActive && hovered && { borderBottomColor: colors.border },
                    hovered && { backgroundColor: colors.backgroundElement + "40" }
                  ]}
                >
                  {({ hovered }) => (
                    <>
                      <Icon
                        name={item.icon}
                        size={20}
                        color={isActive || hovered ? colors.text : colors.textSecondary}
                      />
                      <ThemedText
                        style={[
                          styles.navText,
                          { color: isActive || hovered ? colors.text : colors.textSecondary }
                        ]}
                      >
                        {item.name}
                      </ThemedText>
                    </>
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Main content area */}
        <View style={styles.content}>
          <Slot />
        </View>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    height: 64,
    borderBottomWidth: 1,
  },
  logoContainer: {
    justifyContent: "center",
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  navLinks: {
    flexDirection: "row",
    gap: 24,
    height: "100%",
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 8,
    height: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    // React Native Web support for smooth transitions
    ...({
      transitionProperty: "all",
      transitionDuration: "150ms",
    } as any),
  },
  navText: {
    fontSize: 14,
    fontWeight: "500",
  },
  content: {
    flex: 1,
  },
});
