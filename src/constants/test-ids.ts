/**
 * Centralized registry of testIDs for Maestro E2E automated testing.
 *
 * Naming convention:
 * - tab_*    -> Navigation tabs / bottom bar buttons
 * - screen_* -> Screen root views or major containers
 * - scroll_* -> Scrollable containers (ScrollView, FlatList)
 * - btn_*    -> Buttons and clickable items
 * - txt_*    -> Text labels, titles and headers
 * - input_*  -> Text inputs and form fields
 * - icon_*   -> Icons (especially non-clickable or status indicators)
 */
export const TestIDs = {
  // Navigation & Tabs
  tabs: {
    home: "tab_home",
    menu: "tab_menu",
  },

  // Home Screen
  home: {
    screen: "screen_home",
    scroll: "scroll_home",
    welcome: "txt_home_welcome",
    btnDetails: "btn_go_to_details",
    headerBell: "btn_header_bell",
  },

  // Details Screen
  details: {
    screen: "screen_details",
    message: "txt_details_message",
  },

  // Menu Screen
  menu: {
    screen: "screen_menu",
    scroll: "scroll_menu",
    title: "txt_menu_title",
    headerSettings: "btn_header_settings",
  },

  // Hero Components
  hero: {
    header: "hero_header",
    scroll: "scroll_hero",
    userName: "txt_user_name",
    notifications: "btn_notifications",
    profileIcon: "icon_user_profile",
  },
} as const;

/**
 * Helper to produce standard testID and accessibility props.
 */
export function testProps(id: string, accessibilityLabel?: string) {
  return {
    testID: id,
    accessibilityLabel: accessibilityLabel ?? id,
    accessible: true,
  };
}

/**
 * Helper specifically for Views to prevent Android view flattening.
 * Setting collapsable: false prevents Android from optimizing out/flattening views.
 */
export function viewTestProps(id: string, accessibilityLabel?: string) {
  return {
    testID: id,
    accessibilityLabel: accessibilityLabel ?? id,
    accessible: true,
    collapsable: false,
  };
}
