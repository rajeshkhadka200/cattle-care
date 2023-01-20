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
import axios from "axios";

import styles from "../styles/CattleDetailsScreen.design.js";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import LoginInput from "../components/LoginInput";
import Button from "../components/Button";
import LightButton from "../components/LightButton";
import { cp } from "../Context.js";

const CattleDetailsScreen = () => {
  const {
    user,
    selectedCattle: [gender, setGender],
    cattleInfo: [data, setData],
  } = useContext(cp);
  const [modalVisible, setModalVisible] = useState(false);
  const [price, setPrice] = useState(null);

  const [selected, setSelected] = useState({});

  var radio_props = [
    { label: "Male", value: "ox" },
    { label: "Female", value: "cow" },
  ];

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [values, Setvalues] = useState({
    name: "",
    dob: "",
    price: "",
  });

  console.log(values);
  const saveCattle = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `http://157.245.106.197:5000/api/cattle/addcattle`,
        {
          user_id: user.id,
          name: values.name,
          dob: values.dob,
          gender: gender,
          cost: values.price,
        }
      );
      console.log(res.data);
      setModalVisible(!modalVisible);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  let count = 0;
  data?.map((item) => {
    if (gender === "AllGender") return (count = data?.length);
    item.gender == gender ? count++ : null;
  });
  return (
    <View style={[styles.container, { paddingTop: 30 }]}>
      <MainHeader title={gender} />

      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Text style={styles.totalNumbers}>
            Total {gender === "AllGender" ? "Cattles" : gender}
          </Text>
          <Text style={styles.lightTitle}>
            Your farm has {count} number of
            {gender === "AllGender" ? "all Cattles" : " " + gender}
          </Text>

          <View style={styles.cardContainer}>
            {data?.map(
              (item, index) =>
                (item.gender === gender || gender === "AllGender") && (
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(data[index]);
                      setModalVisible(true);
                    }}
                    style={styles.card}
                    key={index}
                  >
                    <View>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.age}>{item.age}</Text>
                    </View>
                    <Image
                      source={require("../assets/cattles/gai_basanti.jpg")}
                      style={styles.image}
                    ></Image>
                  </TouchableOpacity>
                )
            )}
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
              // add wala
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
                    onChangeText={(text) => {
                      Setvalues({
                        ...values,
                        name: text,
                      });
                    }}
                    value={values.name}
                    placeholder="Basanti"
                    keyboardType={"default"}
                    label={"Name"}
                  />
                  <LoginInput
                    onChangeText={(text) => {
                      Setvalues({
                        ...values,
                        dob: text,
                      });
                    }}
                    value={values.dob}
                    placeholder="2022-01-01"
                    label={"Date of Birth"}
                    keyboardType={"default"}
                  />

                  <LoginInput
                    onChangeText={(text) => {
                      Setvalues({
                        ...values,
                        price: text,
                      });
                    }}
                    value={values.price}
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
