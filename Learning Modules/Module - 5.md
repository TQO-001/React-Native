# Module 5 — Nested Navigation (Stack + Tabs) in Expo (JavaScript)

This lesson answers **how/why** questions you asked, then gives you a paste‑ready **Stack + Tabs** setup.

---

## Key Concepts: How & Why

### 1) `navigation.navigate()` parameters

* **Required:** first arg is the **screen name** you registered in your navigator (e.g. `'Details'`).
* **Optional:** second arg is an **object of params** you want to pass (e.g. `{ itemId: 42 }`).
* Examples:

  ```js
  navigation.navigate('Details');              // no params
  navigation.navigate('Details', { id: 7 });   // with params
  ```
* Related methods:

  * `navigation.push('Details', params)` → pushes **another** instance of the same screen onto the stack.
  * `navigation.replace('Details', params)` → replaces the current screen (no back).
  * `navigation.goBack()` / `navigation.pop()` → go back one.

### 2) Why `function Screen({ route, navigation })`

* React Navigation **injects** a `props` object into every screen: `{ navigation, route }`.
* We use **destructuring** to grab them directly: `({ route, navigation })`.
* `navigation` controls movement (navigate, push, goBack, etc.).
* `route` tells you **how you got here** and includes `route.params` (data passed from `navigate`).
* If you don’t destructure:

  ```js
  function DetailsScreen(props) {
    const { navigation, route } = props;
  }
  ```

### 3) When to use **Tabs** vs **Stack**

* **Tabs** = top‑level sections users switch between often (Home, Settings, Search…).
* **Stacks** = deeper flows within a section (Home → Details → Profile).
* Real apps combine them: **Tab Navigator** as the app shell, each tab hosts its **own Stack**.

### 4) Headers when nesting

* If a tab contains a stack, you usually set `headerShown: false` on the **tab** screens, and let the **stack** screens render their own headers. This avoids a double header.

### 5) `route.params` safety

* `route.params` can be `undefined` if you didn’t pass anything. Use defaults: `const { id = 0 } = route.params || {};`
* You can set `initialParams` on a screen to provide defaults.

---

## Install (once)

From your project root:

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack @react-navigation/bottom-tabs
npx expo install react-native-gesture-handler react-native-reanimated
npm install @expo/vector-icons
```

**Update `babel.config.js`** (required for Reanimated):

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

> After changing Babel config, stop the dev server and start again.

At the **top of `App.js`**, add (must be first import):

```js
import 'react-native-gesture-handler';
```

---

## Paste‑ready Example: Tabs hosting Stacks

Create/replace `App.js` with:

```jsx
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// --- Screens (Home stack)
function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Details (id=42)"
        onPress={() => navigation.navigate('Details', { itemId: 42, msg: 'From Home' })}
      />
      <Button
        title="Go to Settings tab"
        onPress={() => navigation.navigate('SettingsTab')}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId = 0, msg = 'Details' } = route.params || {};
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Details</Text>
      <Text>itemId: {itemId}</Text>
      <Text>msg: {msg}</Text>
      <Button title="Push another Details" onPress={() => navigation.push('Details', { itemId: itemId + 1, msg: 'Pushed' })} />
      <Button title="Go to Profile (Thulani)" onPress={() => navigation.navigate('Profile', { username: 'Thulani' })} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ProfileScreen({ route }) {
  const { username = 'Guest' } = route.params || {};
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Welcome, {username}</Text>
    </View>
  );
}

// --- Screens (Settings stack)
function SettingsScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>About This App</Text>
      <Text>Built with React Navigation (Stack + Tabs)</Text>
    </View>
  );
}

// --- Navigators
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route?.params?.msg ?? 'Details' })}
      />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="About" component={AboutScreen} />
    </SettingsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // let inner stacks control headers
          tabBarIcon: ({ color, size, focused }) => {
            const name = route.name === 'HomeTab' ? (focused ? 'home' : 'home-outline') : (focused ? 'settings' : 'settings-outline');
            return <Ionicons name={name} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: 'Home' }} />
        <Tab.Screen name="SettingsTab" component={SettingsStackNavigator} options={{ title: 'Settings' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
});
```

**Notes**

* We registered tab screens as `HomeTab` and `SettingsTab`. That’s why `navigation.navigate('SettingsTab')` works.
* Tabs hide their own headers (`headerShown: false`) so the stack headers show instead.
* `Details` screen’s header title reads from `route.params.msg` if provided.

---

## Common Pitfalls (and fixes)

* **“undefined is not an object (evaluating 'route.params')”** → You navigated without params. Use `route.params || {}` when destructuring, or set `initialParams` on the screen.
* **Double headers** → Set `headerShown: false` on tab screens; keep headers on stack screens.
* **Reanimated error after install** → Ensure the Babel plugin is added and restart the dev server.
* **Gesture handler errors** → Make sure `import 'react-native-gesture-handler';` is the **first** import in `App.js`.

---

## Practice Tasks

1. In `HomeScreen`, add a button: **“Replace with Details (id=99)”** using `navigation.replace('Details', { itemId: 99 })` and observe back behavior.
2. In `ProfileScreen`, set the header title to the username: `options={({ route }) => ({ title: route.params?.username || 'Profile' })}`.
3. Add a third tab called **FeedTab** with its own stack and a `Feed` + `Post` screen.

---

## Git Commits

Use these as you complete each chunk:

```bash
git add .
git commit -m "Install React Navigation and dependencies"

git add .
git commit -m "Configure Babel for Reanimated and add gesture-handler import"

git add .
git commit -m "Set up bottom tab navigator with Home and Settings tabs"

git add .
git commit -m "Create Home stack with Home, Details, and Profile screens"

git add .
git commit -m "Create Settings stack with Settings and About screens"

git add .
git commit -m "Wire param passing, dynamic headers, and cross-tab navigation"
```

---

## Quick Recap

* `navigate(name, params?)` → second argument is optional.
* `{ route, navigation }` are injected props; destructuring is just convenience.
* Tabs = top-level sections; Stacks = deep flows inside a section.
* Hide tab headers, show stack headers; pass params safely.

When you’re done pasting and running, tell me what (if anything) errors out, and I’ll debug with you quickly.
