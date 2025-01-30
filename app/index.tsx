import FlatListCheck from "@/components/FlatListCheck";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  const route = useRouter();
  const onContinue = () => {
    route.navigate("/login");
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to basic login and signup project</Text>

      <MyButton title={"Login"} onPress={onContinue} />

      <FlatListCheck />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
