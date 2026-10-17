import { Text } from "@/components/text";
import { TestIDs } from "@/constants/test-ids";
import { useResponsive } from "@/hooks/use-responsive";
import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function DetailsScreen() {
  const theme = useTheme();
  const { isDesktop } = useResponsive();

  return (
    <>
      <Stack.Screen options={{ headerShown: !isDesktop }} />
      <View
        testID={TestIDs.details.screen}
        collapsable={false}
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        <Text testID={TestIDs.details.message}>
          Look at the back arrow up there! ⬆️
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
