import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import MainHeader from "../components/MainHeader";

import styles from "../styles/CattleDetailsScreen.design.js";
import { useNavigation } from "@react-navigation/native";

const CattleDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { paddingTop: 30 }]}>
      <MainHeader title={"Cows"} />

      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Text style={styles.totalNumbers}>Total Cows</Text>
          <Text style={styles.lightTitle}>Your farm has 180 cows</Text>

          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CattleDetails")}
              style={styles.card}
            >
              <View>
                <Text style={styles.name}>Darrel Khadka</Text>
                <Text style={styles.age}>21 months old</Text>
              </View>
              <Image
                source={require("../assets/cattles/gai_basanti.jpg")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

      <TouchableOpacity style={styles.add}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CattleDetailsScreen;
