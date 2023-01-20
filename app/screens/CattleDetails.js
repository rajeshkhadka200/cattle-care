import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Pressable,
  RadioNodeList,
} from "react-native";
import MainHeader from "../components/MainHeader";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

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

  const [selected, setSelected] = useState({});

  var radio_props = [
    { label: "Male", value: "ox" },
    { label: "Female", value: "cow" },
  ];

  const [gender, setGender] = useState("ox");

  const data = [
    {
      name: "Darrel Khadka",
      age: "21 months old",
      gender: "cow",
    },
    {
      name: "Rajesh Khadka",
      age: "21 months old",
      gender: "cow",
    },
    {
      name: "Rajesh Bachho",
      age: "21 months old",
      gender: "ox",
    },
    {
      name: "Basanti",
      age: "21 months old",
      gender: "cow",
    },
  ];

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const saveCattle = async () => {
    console.log("saveCattle");

    try {
      //start loading
      setLoading(true);

      const { data } = await axios({
        method: "post",
        url: `http://157.245.106.197:5000/api/cattle/addcattle`,
        data: {
          user_id: user.id,
          name: values.name,
          dob: values.dob,
          gender: gender,
          cost: values.price,
        },
      });

      console.log(data);

      setModalVisible(!modalVisible);
    } catch (error) {
      handleError(error);
      //   console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error) => {
    const message = error.error || error.response.data.error || error.message;
    setError(message);

    setTimeout(() => {
      setError("");
    }, 5000);
  };

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
                onPress={() => {
                  setSelected(data[index]);
                  setModalVisible(true);
                }}
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
              setSelected({});
            }}
          >
            {selected?.name ? (
              <View style={styles.popup}>
                <View style={styles.head}>
                  <View style={styles.details}>
                    <Text style={styles.popupTitle}>{selected.name}</Text>
                    <Text style={styles.popupSubtitle}>
                      {selected.age} {selected.gender}
                    </Text>
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

                  {/* Error text */}
                  <Text style={styles.errorText}>{error}</Text>

                  <Button
                    text="Sell Cow"
                    handleLogin={() => {
                      setModalVisible(!modalVisible);
                    }}
                  />
                  <LightButton
                    text="Cow no more?"
                    handleLogin={() => {
                      setModalVisible(!modalVisible);
                    }}
                  />
                </View>
              </View>
            ) : (
              <View
                style={[
                  styles.popup,
                  {
                    height: "75%",
                  },
                ]}
              >
                <View style={styles.head}>
                  <View style={styles.details}>
                    <Text style={styles.popupTitle}>Add new cattle</Text>
                  </View>
                </View>

                <View style={styles.body}>
                  <LoginInput
                    placeholder="Basanti"
                    keyboardType={"default"}
                    label={"Name"}
                  />
                  <LoginInput
                    placeholder="2022-01-01"
                    label={"Date of Birth"}
                    keyboardType={"default"}
                  />

                  <LoginInput
                    placeholder="200"
                    keyboardType={"numeric"}
                    label={"Price"}
                  />

                  <RadioForm
                    radio_props={radio_props}
                    initial={"ox"}
                    formHorizontal={false}
                    labelHorizontal={true}
                    buttonColor={"#2196f3"}
                    animation={true}
                    onPress={(value) => {
                      setGender(value);
                      console.log(value);
                    }}
                  />

                  {/* Error text */}
                  <Text style={styles.errorText}>{error}</Text>

                  <Button
                    text="Add Cattle"
                    loading={loading}
                    handleLogin={() => {
                      console.log("add cattle");
                      saveCattle();
                    }}
                  />
                </View>
              </View>
            )}
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
