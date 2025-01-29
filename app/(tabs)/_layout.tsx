import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="about2" />
      <Tabs.Screen name="contact" />
    </Tabs>
  );
}
