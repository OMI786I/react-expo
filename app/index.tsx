import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "white",
        }}
      >
        Hello
      </Text>
      <Link href={"/about"}>Go to about</Link>
      <Link href={"/custom"}>Go to custom</Link>
      <Link href={"/details2"}>Go to details</Link>
    </View>
  );
}
