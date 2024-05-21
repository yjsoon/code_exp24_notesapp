import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

export default function NotesScreen({ route, navigation }) {
  const [notes, setNotes] = useState([
    { id: "1", title: "Walk the dog every day" },
    { id: "2", title: "Some thoughts about useEffect and its various modes" }
  ]);

  function addNote() {
    navigation.navigate("Add Note");
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

  useEffect(() => {
    if (route.params?.title) {
      const newNote = {
        title: route.params.title,
        id: notes.length.toString()
      };
      setNotes([...notes, newNote]);
    }
  }, [route.params?.title]);

  function renderNote({ item }) {
    return (
      <View
        style={{
          padding: 12,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "#aaa",
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <Text
          style={{
            fontSize: 20,
            width: "80%"
          }}>
          {item.title}
        </Text>
        <Pressable
          onPress={() => setNotes(notes.filter((note) => note.id !== item.id))}>
          <Entypo name="trash" size={24} color="#999" />
        </Pressable>
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
