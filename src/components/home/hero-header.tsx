import { StyleSheet, Text, View } from "react-native";

import { Icon } from "@/components/icon";
import { useTheme } from "@/hooks/use-theme";

interface HeroHeaderProps {
  children?: React.ReactNode;
  testID?: string;
}

export function HeroHeader({
  children,
  testID = "hero_header",
}: HeroHeaderProps) {
  const theme = useTheme();

  return (
    <>
      <View style={[styles.overscroll, { backgroundColor: theme.primary }]} />
      <View
        testID={testID}
        collapsable={false}
        style={[
          styles.hero,
          { paddingTop: 10, backgroundColor: theme.primary },
        ]}
      >
        <View style={styles.topBar}>
          <View style={styles.userInfo}>
            <Icon
              name="account-circle"
              size={40}
              color="#fff"
              testID="icon_user_profile"
            />
            <Text testID="txt_user_name" style={styles.name}>
              Hello, John Doe
            </Text>
          </View>
          <View style={styles.bellContainer}>
            <Icon
              name="bell-outline"
              size={24}
              color="#fff"
              testID="btn_notifications"
              accessibilityLabel="Notificações"
              onPress={() => console.log("Bell pressed!")}
            />
          </View>
        </View>

        {children}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overscroll: {
    position: "absolute",
    top: -1000,
    left: 0,
    right: 0,
    height: 1000,
  },
  hero: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 16,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  name: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "600",
  },
  bellContainer: {
    position: "relative",
  },
});
