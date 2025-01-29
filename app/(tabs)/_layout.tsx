import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text } from "react-native";
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about2"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <FontAwesome size={28} name="cog" color={color} />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
