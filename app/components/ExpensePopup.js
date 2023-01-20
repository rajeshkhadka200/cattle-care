import {
  View,
  Text,
  Image,
  Dimensions,
  Touchable,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

//icons
import Heart from "../assets/svg/heart.svg";
import { cp } from "../Context";

const ExpensePopup = () => {
  const {
    popup: {
      expense: [expensePop, setExpensePop],
    },
  } = useContext(cp);

  //   drop down one states
  const [d1open, setd1Open] = useState(false);
  const [d1value, setd1Value] = useState(null);
  const [d1items, setd1Items] = useState([
    { label: "Basanti", value: "basanti" }, // this will be the cattle name and value to show for their name
    { label: "Kalu", value: "kalu" },
  ]);

  //  dropDown two states
  const [d2open, setd2Open] = useState(false);
  const [d2value, setd2Value] = useState(null);
  const [d2items, setd2Items] = useState([
    {
      label: "Food And Mouth Disease (FMD)",
      value: "fmd",
    },
    {
      label: "Haemorrhagic Septicaemia (HS)",
      value: "hs",
    },
    {
      value: "Black Quarter (BQ)",
      label: "Black Quarter (BQ)",
    },
    {
      value: "Brucellosis",
      label: "Brucellosis",
    },
    {
      value: "Theileriosis",
      label: "Theileriosis",
    },
    {
      value: "Anthrax",
      label: "Anthrax",
    },
    {
      value: "IBR (Infectious Bovine Rhinotracheitis)",
      label: "IBR (Infectious Bovine Rhinotracheitis)",
    },
    {
      value: "Rabies",
      label: "Rabies",
    },
  ]);

  // data for sending the data
  const [data, setdata] = useState({
    cattle: d1value,
    medicine: d2value,
    healthCost: "",
    foodCost: "",
  });
  console.log(data);
  const [activeSelection, setActiveSelection] = useState("Health");
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={expensePop}
        onRequestClose={() => {
          setExpensePop(!expensePop);
        }}
      >
        <View style={styles.popup}>
          {/* for the health part */}
          <View style={styles.types}>
            {/* health */}

            <Pressable
              style={{ flex: 1 }}
              onPress={() => {
                setActiveSelection("Health");
              }}
            >
              <View
                style={[
                  styles.type,
                  activeSelection === "Health" && styles.activeSelectionType,
                ]}
              >
                <Heart />
                <Text
                  style={[
                    styles.selectionText,
                    activeSelection === "Health" && styles.activeSelectionText,
                  ]}
                >
                  Health
                </Text>
              </View>
            </Pressable>

            {/* food */}
            <Pressable
              style={{ flex: 1 }}
              onPress={() => {
                setActiveSelection("Food");
              }}
            >
              <View
                style={[
                  styles.type,
                  activeSelection === "Food" && styles.activeSelectionType,
                ]}
              >
                <Image source={require("../assets/cattles/food.png")} />

                <Text
                  style={[
                    styles.selectionText,
                    activeSelection === "Food" && styles.activeSelectionText,
                  ]}
                >
                  Food
                </Text>
              </View>
            </Pressable>
          </View>
          {/* first drop down */}
          {activeSelection === "Health" && (
            <View style={styles.cattleChoosing}>
              <Text style={styles.label}>Choose cattle</Text>
              <DropDownPicker
                open={d1open}
                value={d1value}
                items={d1items}
                setOpen={setd1Open}
                setValue={setd1Value}
                setItems={setd1Items}
                placeholder={"choose a cattle"}
                zIndex={2000}
                zIndexInverse={1000}
              />
            </View>
          )}
          {activeSelection === "Health" && (
            <View style={styles.chooseMed}>
              <Text style={styles.label}>Choose Medicine or vaccine</Text>
              <DropDownPicker
                open={d2open}
                value={d2value}
                items={d2items}
                setOpen={setd2Open}
                setValue={setd2Value}
                setItems={setd2Items}
                zIndex={1000}
                zIndexInverse={2000}
                placeholder={"choose a medicine"}
              />
            </View>
          )}
          {/* second drop down */}
          <View style={styles.cost}>
            <Text style={styles.label}>Cost</Text>
            <TextInput
              placeholder="90,000"
              style={styles.txtInput}
              placeholderTextColor={"#808281"}
            />
          </View>
          <Text style={styles.addExpense}>Add Expense</Text>
        </View>
      </Modal>

      {/* closer */}
      {expensePop && <View style={styles.kaloDabba}></View>}
    </>
  );
};

export default ExpensePopup;

const styles = StyleSheet.create({
  popup: {
    width: "100%",
    padding: 30,
    backgroundColor: "white",
    height: 600,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 3,
  },

  types: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },

  kaloDabba: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#000",
    opacity: 0.4,
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    zIndex: 2,
  },
  type: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#E1E1E1",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 50,
    marginLeft: 10,
  },

  activeSelectionType: {
    backgroundColor: "#26C486",
  },
  activeSelectionText: {
    marginLeft: 12,
    color: "white",
  },
  chooseMed: {
    marginTop: 25,
  },
  cattleChoosing: {
    marginTop: 25,
  },
  txtInput: {
    width: "100%",
    borderWidth: 1,
    padding: 19,
    borderRadius: 14,
  },
  cost: {
    marginTop: 25,
  },
  label: {
    marginBottom: 5,
  },
  addExpense: {
    padding: 19,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#26C486",
    marginTop: 25,
  },
  selectionText: {
    marginLeft: 12,
  },
});
