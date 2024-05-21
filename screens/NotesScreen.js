import { View, Text, StyleSheet, Pressable } from "react-native";
import { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

export default function NotesScreen({ navigation }) {
  function addNote() {
    console.log("Adding note");
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={addNote}>
            <Entypo name="new-message" size={24} color="black" />
          </Pressable>
        );
      }
    });
  });

  return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc"
  }
});
