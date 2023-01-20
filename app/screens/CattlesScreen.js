import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import MainHeader from "../components/MainHeader";

import AllCatles from "../assets/svg/cattle.svg";
import Cow from "../assets/svg/cow.svg";
import Ox from "../assets/svg/ox.svg";
import Calve from "../assets/svg/calves.svg";

import styles from "../styles/CattleScreen.design.js";
import { useNavigation } from "@react-navigation/native";
import { cp } from "../Context";

const CattleScreen = () => {
  const navigation = useNavigation();
  const cattleNumber = 5;

  const {
    selectedCattle: [gender, setGender],
  } = useContext(cp);

  return (
    <View style={[styles.container, { paddingTop: 30 }]}>
      <MainHeader title={"Cattles"} />

      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.totalNumbers}>Total Cattles</Text>
          <Text style={styles.lightTitle}>
            Your farm has {cattleNumber} cattles
          </Text>

          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CattleDetailScreen");
                setGender("AllGender");
              }}
              style={[
                styles.card,
                {
                  backgroundColor: "#FD6767",
                },
              ]}
            >
              <Text style={styles.number}>5</Text>
              <Text style={styles.name}>All Cattles</Text>
              <View style={styles.imageContainer}>
                <AllCatles />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CattleDetailScreen");
                setGender("cow");
              }}
              style={[
                styles.card,
                {
                  backgroundColor: "#607089",
                },
              ]}
            >
              <Text style={styles.number}>2</Text>
              <Text style={styles.name}>Cows</Text>
              <View style={styles.imageContainer}>
                <Cow />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CattleDetailScreen");
                setGender("ox");
              }}
              style={[
                styles.card,
                {
                  backgroundColor: "#EF991B",
                },
              ]}
            >
              <Text style={styles.number}>2</Text>
              <Text style={styles.name}>Ox</Text>
              <View style={styles.imageContainer}>
                <Ox />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CattleDetailScreen");
                setGender("calves");
              }}
              style={[
                styles.card,
                {
                  backgroundColor: "#27A574",
                },
              ]}
            >
              <Text style={styles.number}>1</Text>
              <Text style={styles.name}>Calves</Text>
              <View style={styles.imageContainer}>
                <Calve />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CattleScreen;
