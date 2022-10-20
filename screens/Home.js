import {
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Texts from "../components/Texts";
import { Color } from "../themes/Color";
import ContryHeader from "../components/ContryHeader";
import { countries } from "../data/country";
import { Spacing } from "../themes/Spacing";
import { AntDesign } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  const [list, setList] = useState(countries);
  const search = (value) => {
    const searchCountryName = countries.filter((item, index) => {
      const contryName = item.name.toLowerCase();
      const searchValue = value.toLowerCase();
      return contryName.indexOf(searchValue) > -1;
    });
    setList(searchCountryName);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ContryHeader />
        <TextInput
          style={styles.search}
          placeholder="ENTER COUNTRY NAME"
          placeholderTextColor="white"
          onChangeText={(value) => {
            search(value);
          }}
        />
        <View style={{ padding: Spacing[5] }}>
          <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate("Details", { country: item });
                  }}
                  style={styles.itemStyle}
                >
                  <View style={styles.itemImg}>
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={{ uri: item.flag }}
                    />
                    <Texts style={styles.countryName}>
                      {item.name.toLocaleUpperCase()}
                    </Texts>
                  </View>
                  <AntDesign name="arrowright" size={24} color="white" />
                </Pressable>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
  },
  itemImg: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  countryName: {
    marginLeft: Spacing[4],
  },
  itemStyle: {
    marginTop: Spacing[5],
    borderBottomWidth: 0.5,
    borderColor: Color.White,
    padding: Spacing[4],
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  search: {
    borderBottomColor: Color.White,
    borderBottomWidth: 0.5,
    color: Color.White,
    fontSize: Spacing[5],
    padding: Spacing[4],
  },
});
