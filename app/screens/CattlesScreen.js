import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import MainHeader from "../components/MainHeader";

import AllCatles from "../assets/svg/cattle.svg";
import Cow from "../assets/svg/cow.svg";
import Ox from "../assets/svg/ox.svg";
import Calve from "../assets/svg/calves.svg";

import styles from "../styles/CattleScreen.design.js";
import { useNavigation } from "@react-navigation/native";

const CattleScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { paddingTop: 30 }]}>
      <MainHeader title={"Cattles"} />

      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.totalNumbers}>Total Cattles</Text>
          <Text style={styles.lightTitle}>Your farm has 250 cattles</Text>

          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CattleDetailScreen")}
              style={[
                styles.card,
                {
                  backgroundColor: "#FD6767",
                },
              ]}
            >
              <Text style={styles.number}>250</Text>
              <Text style={styles.name}>All Cattles</Text>
              <View style={styles.imageContainer}>
                <AllCatles />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("CattleDetailScreen")}
              style={[
                styles.card,
                {
                  backgroundColor: "#607089",
                },
              ]}
            >
              <Text style={styles.number}>180</Text>
              <Text style={styles.name}>Cows</Text>
              <View style={styles.imageContainer}>
                <Cow />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("CattleDetailScreen")}
              style={[
                styles.card,
                {
                  backgroundColor: "#EF991B",
                },
              ]}
            >
              <Text style={styles.number}>20</Text>
              <Text style={styles.name}>Ox</Text>
              <View style={styles.imageContainer}>
                <Ox />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("CattleDetailScreen")}
              style={[
                styles.card,
                {
                  backgroundColor: "#27A574",
                },
              ]}
            >
              <Text style={styles.number}>250</Text>
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
