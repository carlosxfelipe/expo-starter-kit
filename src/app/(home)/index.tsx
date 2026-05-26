import { Link, Stack } from "expo-router";
import { Platform, ScrollView, StyleSheet } from "react-native";

import { Icon } from "@/components/icon";
import { ThemedText } from "@/components/themed-text";

import { useTheme } from "@/hooks/use-theme";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Icon
              name="bell-outline"
              size={22}
              color={theme.text}
              onPress={() => console.log("Bell pressed!")}
              style={Platform.OS === "web" ? { marginRight: 16 } : undefined}
            />
          ),
        }}
      />
      <ScrollView
        style={[styles.scrollView, { backgroundColor: theme.background }]}
        contentContainerStyle={styles.contentContainer}
        contentInsetAdjustmentBehavior="automatic"
      >
        <ThemedText>Welcome to Expo</ThemedText>
        <Link href="/details" asChild>
          <ThemedText
            style={{
              marginTop: 20,
              color: theme.primary,
              textDecorationLine: "underline",
            }}
          >
            Go to Details screen
          </ThemedText>
        </Link>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
});
