import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Linking,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Texts from "../components/Texts";
import { Color } from "../themes/Color";
import ContryHeader from "../components/ContryHeader";
import { Spacing } from "../themes/Spacing";
import { Feather, AntDesign } from "@expo/vector-icons";
import DetailsText from "../components/DetailsText";

const Details = ({ navigation, route }) => {
  const [index, setIndex] = useState(0);
  const { country } = route.params;
  // left button function
  const leftCount = () => {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  // right button function
  const rightCount = () => {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ContryHeader BackBtn={true} title={country.name} />
        <View style={styles.contentStyle}>
          <View style={styles.imageContainer}>
            <AntDesign
              style={styles.leftBtn}
              name="left"
              size={32}
              color="white"
              onPress={leftCount}
            />
            <Image
              style={styles.imgStyle}
              source={{ uri: country.img[index] }}
            />
            <AntDesign
              style={styles.rightBtn}
              name="right"
              size={32}
              color="white"
              onPress={rightCount}
            />
          </View>
          <Texts preset="h3" style={{ marginTop: Spacing[10] }}>
            {country.name}
          </Texts>
          <Pressable
            onPress={() => {
              Linking.openURL(country.wikipedia);
            }}
            style={styles.sourse}
          >
            <Texts>Sourse : </Texts>
            <Texts preset="h5" style={styles.linktextStyle}>
              wikipedia
            </Texts>
            <Feather name="external-link" size={16} color="white" />
          </Pressable>
        </View>
        <View style={{ padding: Spacing[8], marginTop: Spacing[10] }}>
          <DetailsText title="AREAS" value={country.areas} />
          <DetailsText title="POPULATION" value={country.population} />
          <DetailsText title="CAPITAL" value={country.Capital} />
          <DetailsText title="COLLING CODE" value={country.CallingCode} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
  },
  imgStyle: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },
  contentStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacing[15],
  },
  sourse: {
    flexDirection: "row",
    alignItems: "center",
  },
  linktextStyle: {
    textDecorationStyle: "solid",
    textDecorationColor: Color.blue,
    textDecorationLine: "underline",
    marginRight: Spacing[1],
  },
  imageContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  rightBtn: {
    position: "absolute",
    right: 1,
    zIndex: 10,
    backgroundColor: Color.White,
    color: Color.gray,
  },
  leftBtn: {
    position: "absolute",
    left: 1,
    zIndex: 10,
    backgroundColor: Color.White,
    color: Color.gray,
  },
});
