import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

import { Icon } from "@/components/icon";
import { Text } from "@/components/text";
import { TestIDs } from "@/constants/test-ids";
import { useResponsive } from "@/hooks/use-responsive";
import { useTheme } from "@/hooks/use-theme";

export default function MenuScreen() {
  const theme = useTheme();
  const { isDesktop } = useResponsive();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: !isDesktop,
          headerRight: () => (
            <Icon
              name="cog"
              size={22}
              color={theme.text}
              testID={TestIDs.menu.headerSettings}
              accessibilityLabel="Configurações"
              onPress={() => console.log("Settings pressed!")}
              style={{ marginRight: 16 }}
            />
          ),
        }}
      />
      <ScrollView
        testID={TestIDs.menu.scroll}
        style={[styles.scrollView, { backgroundColor: theme.background }]}
        contentContainerStyle={styles.contentContainer}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Text testID={TestIDs.menu.title}>Menu</Text>
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
