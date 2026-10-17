import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";
import React from "react";
import {
  type AccessibilityRole,
  type StyleProp,
  type ViewStyle,
  Pressable,
  StyleSheet,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

// Extract the name type from the glyphmap keys
export type IconName = React.ComponentProps<typeof MaterialDesignIcons>["name"];

export interface IconProps {
  /**
   * The name of the Material Design Icon.
   * Autocomplete/Typescript support is fully available for all 7000+ icons!
   */
  name: IconName;
  /**
   * The size of the icon. Defaults to 24.
   */
  size?: number;
  /**
   * The color of the icon.
   */
  color?: string;
  /**
   * Custom style for the icon container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Optional click/tap handler. If provided, the icon renders as a pressable element
   * with premium micro-interactions.
   */
  onPress?: () => void;
  /**
   * Enables subtle micro-animations (scale bounce on tap/hover). Defaults to true.
   */
  animated?: boolean;
  /**
   * Unique test identifier for automated E2E tests (Maestro).
   */
  testID?: string;
  /**
   * Accessibility label for screen readers and Maestro selectors.
   */
  accessibilityLabel?: string;
  /**
   * Accessibility role. Defaults to 'button' when onPress is provided.
   */
  accessibilityRole?: AccessibilityRole;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * A premium, state-of-the-art Icon component utilizing modular `@react-native-vector-icons`.
 * Automatically supports responsive scaling, interactive spring-based micro-interactions,
 * and high-performance cross-platform rendering (iOS, Android, and Web).
 */
export function Icon({
  name,
  size = 24,
  color,
  style,
  onPress,
  animated = true,
  testID,
  accessibilityLabel,
  accessibilityRole,
}: IconProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    if (animated) {
      scale.value = withSpring(0.85, { damping: 15, stiffness: 400 });
    }
  };

  const handlePressOut = () => {
    if (animated) {
      scale.value = withSpring(1, { damping: 15, stiffness: 400 });
    }
  };

  const content = <MaterialDesignIcons name={name} size={size} color={color} />;

  if (onPress) {
    return (
      <AnimatedPressable
        testID={testID}
        collapsable={false}
        accessibilityRole={accessibilityRole ?? "button"}
        accessibilityLabel={accessibilityLabel}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.container, animatedStyle, style]}
      >
        {content}
      </AnimatedPressable>
    );
  }

  return (
    <Animated.View
      testID={testID}
      collapsable={false}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      style={[styles.container, animatedStyle, style]}
    >
      {content}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
