import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Texts from "./Texts";
import { Spacing } from "../themes/Spacing";
import { AntDesign } from "@expo/vector-icons";
import { Color } from "../themes/Color";
import { useNavigation } from "@react-navigation/native";
const ContryHeader = ({ title = "THE COUNTRIES", BackBtn }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {BackBtn && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign
            style={{ marginRight: Spacing[5] }}
            name="arrowleft"
            size={32}
            color="white"
          />
        </Pressable>
      )}
      <Texts preset="h2">{title.toUpperCase()}</Texts>
    </View>
  );
};

export default ContryHeader;

const styles = StyleSheet.create({
  container: {
    padding: Spacing[5],
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: Color.White,
    borderBottomWidth: 0.5,
  },
});
