import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  //navigasyonu özellişleştirmek için kullanılır
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={{ type: "antdesign", name: "wechat", color: "black" }}
      />
      <Button disabled={!input} onPress={createChat} title="Create new Chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    backgroundColor: "white",
  },
});
