# The plan (8 small modules)

1. React-in-RN mindset: components, JSX, props vs state
2. Styling & layout: `StyleSheet`, Flexbox, dimensions
3. Hooks you’ll really use: `useState`, `useEffect`, `useRef`
4. Navigation: stacks & tabs with React Navigation
5. Data & state: fetch APIs, AsyncStorage, Context (then Redux/Zustand if needed)
6. Native device APIs: permissions, camera, geolocation, haptics
7. TypeScript in RN: props, state, custom hooks
8. Performance & shipping: lists, memoization, profiling, building for store/play

We’ll switch between quick explanations, tiny exercises, and review.

---

## Setup (we’ll default to Expo for speed)

Expo lets you run on your phone immediately and skip heavy native setup at first.

1. Install Node LTS (check with `node -v` and `npm -v`).
2. Create a project:

```bash
npx create-expo-app rn-starter --template
cd rn-starter
npx expo start
```

3. Run it: install the **Expo Go** app on your phone, scan the QR, and your app appears.  
    (If/when you need native modules not supported by Expo Go, we’ll “prebuild” or switch to the React Native CLI.

> If you already have Android Studio or Xcode, you can also hit **a** (Android) or **i** (iOS) in the Expo dev terminal to launch an emulator/simulator.

---

## Module 1 — React the RN way (components, JSX, props vs state)

Think of a React Native app as a tree of components. Each component:
- receives **props** (inputs from its parent)
- manages **state** (its own changeable data)
- **re-renders** when props/state change

Try this in `App.tsx` (or `App.js` if you didn’t pick TS):

```tsx
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Greeting({ name }: { name: string }) {
  return <Text style={styles.greeting}>Hi, {name} 👋</Text>;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Greeting name="Thulani" />
      <Text style={styles.title}>Count: {count}</Text>

      <Button title="Increment" onPress={() => setCount(c => c + 1)} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "600", marginVertical: 12 },
  greeting: { fontSize: 18, opacity: 0.8 },
});
```

**What you just used**
- **JSX**: HTML-like syntax that renders **native** views (`View`, `Text`, `Button`) instead of DOM.
- **Props**: `Greeting` receives `name`.
- **State**: `count` lives in `App`; calling `setCount` triggers a re-render.

**Mini-task (do it now)**
- Add a **“Reset”** button that sets `count` back to 0.
- Change the `Greeting` to accept a `mood` prop and show it (e.g., “👋 (focused)”).

---

## Module 2 — Styling & layout (Flexbox basics)
RN uses Flexbox by default. Three rules get you 80% there:

- Parent controls layout of children with `flexDirection`, `justifyContent`, `alignItems`.
- Children can expand with `flex: 1`.
- Use padding/margin just like CSS.

Drop this somewhere in `App` to feel the layout:

```tsx
<View style={{ width: "100%", padding: 16 }}>
  <View style={{ flexDirection: "row", gap: 8 }}>
    <View style={{ flex: 1, height: 60, backgroundColor: "#ddd" }} />
    <View style={{ flex: 2, height: 60, backgroundColor: "#bbb" }} />
  </View>
</View>
```

**Try:** change `flexDirection` to `"column"` and see how it reflows.

---

## Module 3 — Side effects with `useEffect`

Use effects for things **outside** rendering: timers, subscriptions, fetching.

```tsx
import { useEffect } from "react";

useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);
  return () => clearInterval(id);
}, []); // run once
```

Key idea: return a cleanup function to avoid leaks, especially in RN where components mount/unmount across screens.

---

## Next steps (where we’re headed)

- **Navigation**: we’ll install React Navigation and make a two-screen app (Home → Details).
- **Data**: fetch JSON from a public API, display it in a performant `FlatList`.
- **State**: lift state to Context; compare with Redux and Zustand so you know when to use each.
- **TypeScript**: add props/state types and a `useToggle` custom hook.
- **Device APIs**: use camera, location, vibration—with proper permission flows.
- **Performance**: memoize row renders, use `keyExtractor`, and avoid anonymous functions in lists.
- **Builds**: make an Android APK/AAB and iOS IPA/TestFlight via EAS (Expo Application Services).

---

### Quick review (you teaching me)

Explain, in one or two sentences, the difference between **props** and **state** in the app above. Keep it super plain.
