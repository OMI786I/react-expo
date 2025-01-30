import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const DATA = [
  { id: "1", title: "Data Structures" },
  { id: "2", title: "STL" },
  { id: "3", title: "C++" },
  { id: "4", title: "Java" },
  { id: "5", title: "Python" },
  { id: "6", title: "CP" },
  { id: "7", title: "ReactJs" },
  { id: "8", title: "NodeJs" },
  { id: "9", title: "MongoDb" },
  { id: "10", title: "ExpressJs" },
  { id: "11", title: "PHP" },
  { id: "12", title: "MySql" },
];

export default function FlatListCheck() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>FlatListCheck</Text>

      <FlatList
        ListHeaderComponent={
          <View
            style={{ width: "100%", height: 200, backgroundColor: "blue" }}
          ></View>
        }
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.id}) {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Important for scrollability
    marginTop: 30,
    padding: 2,
  },
  header: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#f5f520",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
