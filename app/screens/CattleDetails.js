import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import MainHeader from "../components/MainHeader";

import styles from "../styles/CattleDetailsScreen.design.js";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import LoginInput from "../components/LoginInput";
import Button from "../components/Button";
import LightButton from "../components/LightButton";

const CattleDetailsScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [price, setPrice] = useState(null);

  const data = [
    {
      name: "Darrel Khadka",
      age: "21 months old",
    },
    {
      name: "Rajesh Khadka",
      age: "21 months old",
    },
    {
      name: "Rajesh Bachho",
      age: "21 months old",
    },
    {
      name: "Basanti",
      age: "21 months old",
    },
  ];

  return (
    <View style={[styles.container, { paddingTop: 30 }]}>
      <MainHeader title={"Cows"} />

      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Text style={styles.totalNumbers}>Total Cows</Text>
          <Text style={styles.lightTitle}>Your farm has 180 cows</Text>

          <View style={styles.cardContainer}>
            {data.map(({ name, age }, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CattleDetails")}
                style={styles.card}
                key={index}
              >
                <View>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.age}>{age}</Text>
                </View>
                <Image
                  source={require("../assets/cattles/gai_basanti.jpg")}
                  style={styles.image}
                ></Image>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
      {modalVisible && (
        <Pressable
          style={styles.pupupback}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.popup}>
              <View style={styles.head}>
                <View style={styles.details}>
                  <Text style={styles.popupTitle}>Basanti</Text>
                  <Text style={styles.popupSubtitle}>21 months old cow</Text>
                </View>
                <Image
                  source={require("../assets/cattles/gai_basanti.jpg")}
                  style={styles.popupImage}
                ></Image>
              </View>

              <View style={styles.body}>
                <LoginInput
                  placeholder="Selling Price"
                  keyboardType="numeric"
                  value={price}
                  onChangeText={(text) => setPrice(text)}
                />

                <Button
                  text="Sell Cow"
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                />

                <LightButton
                  text="Cow no more?"
                  handleOnPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                />
              </View>
            </View>
          </Modal>
        </Pressable>
      )}

      <TouchableOpacity
        style={styles.add}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CattleDetailsScreen;
