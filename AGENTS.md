# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

## Testability and Maestro Guidelines

When creating or editing screens and components in this repository:

1. **Stable Identifiers (`testID`):**
   - Always assign a `testID` to interactive components (buttons, inputs, tabs, links, and headers).
   - Register new IDs in `src/constants/test-ids.ts`.
   - Follow the naming convention:
     - `tab_*` (tabs and bottom navigation)
     - `screen_*` (root screen containers)
     - `scroll_*` (ScrollView or FlatList)
     - `btn_*` (buttons and clickable elements)
     - `txt_*` (static or dynamic texts validated in tests)
     - `input_*` (form inputs and text fields)

2. **View Flattening (`collapsable={false}`):**
   - On Android, React Native removes plain Views without visual styling from the native hierarchy.
   - Always add `collapsable={false}` to any `<View>` that receives a `testID`.

3. **Core Components (`Button`, `Icon`, `Text`):**
   - Use the custom components in `@/components`, which automatically forward `testID`, `collapsable={false}`, and `accessibilityRole`.

4. **Tab Navigation:**
   - In `Tabs.Screen`, always configure `tabBarButtonTestID` and `tabBarAccessibilityLabel` to enable reliable selection in Maestro by `id` or label.
