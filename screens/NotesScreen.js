import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

export default function NotesScreen({ navigation }) {
  const [notes, setNotes] = useState([
    { id: "1", title: "Walk the dog every day" },
    { id: "2", title: "Some thoughts about useEffect and its various modes" }
  ]);

  function addNote() {
    let newNote = {
      id: `${notes.length + 1}`,
      title: "Sample new note that's added"
    };
    setNotes([...notes, newNote]);
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

  function renderNote({ item }) {
    return (
      <View
        style={{
          padding: 12,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "#aaa",
          borderBottomWidth: 1
        }}>
        <Text
          style={{
            fontSize: 20
          }}>
          {item.title}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={notes}
        renderItem={renderNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc"
  }
});
