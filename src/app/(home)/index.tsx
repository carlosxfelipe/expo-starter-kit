import { Stack, useRouter } from "expo-router";
import { Platform, ScrollView, StyleSheet } from "react-native";

import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { Text } from "@/components/text";
import { TestIDs } from "@/constants/test-ids";
import { useTheme } from "@/hooks/use-theme";

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerSearchBarOptions: {
            placeholder: "Pesquisar...",
            hideWhenScrolling: true,
            onChangeText: (event) => console.log(event.nativeEvent.text),
          },
          headerRight: () => (
            <Icon
              name="bell-outline"
              size={22}
              color={theme.text}
              testID={TestIDs.home.headerBell}
              accessibilityLabel="Notificações"
              onPress={() => console.log("Bell pressed!")}
              style={Platform.OS === "web" ? { marginRight: 16 } : undefined}
            />
          ),
        }}
      />
      <ScrollView
        testID={TestIDs.home.scroll}
        style={[styles.scrollView, { backgroundColor: theme.background }]}
        contentContainerStyle={styles.contentContainer}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Text testID={TestIDs.home.welcome}>Welcome to Expo</Text>
        <Button
          testID={TestIDs.home.btnDetails}
          variant="tinted"
          onPress={() => router.push("/details")}
          iconRight={(color) => (
            <Icon name="arrow-right" size={18} color={color} animated={false} />
          )}
        >
          Go to Details
        </Button>
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
    gap: 12,
  },
});
