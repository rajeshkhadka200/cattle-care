import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { styles } from "../styles/DiseaseDetails.design.js";
import MainHeader from "../components/MainHeader.js";

const DiseaseDetailsScreen = ({ navigation, route }) => {
  const makeCall = () => {
    let number = `tel:0715256965`;
    Linking.openURL(number);
  };
  const data = [
    {
      id: 1,
      tittle: "Food And Mouth Disease (FMD)",
      image: require("../assets/cattles/d1.png"),
      desc: "causes severe production losses, the disease often leaves them  weakened and debilitated.",
      mainCause:
        "Foot-and-mouth disease (FMD) is caused by a viral infection. The virus responsible for FMD is an aphthovirus of the genus Aphthovirus, of the family Picornaviridae. The disease is highly contagious among cloven-hoofed animals, such as cattle, sheep, pigs, and other domesticated and wild animals. ",
      symp: "Symptoms of Food And Mouth Disease (FMD) include fever, blisters and sores in the mouth and on the feet, and reduced milk production in animals.",
    },
    {
      id: 2,
      tittle: "Haemorrhagic Septicaemia (HS)",
      image: require("../assets/cattles/d2.png"),
      desc: "a bacterial disease that mainly affects cattle and water buffalo.",
      mainCause:
        "Haemorrhagic septicaemia is caused by the bacterium Pasteurella multocida. The bacterium is found in the mouths and noses of healthy cattle and other animals. It is spread by direct contact with infected animals, or by contact with contaminated objects such as feed, water, or equipment.",
      symp: "The disease is characterised by fever, anaemia, tachypnoea, depression, lethargy, jaundice and often eventual death.",
    },
    {
      id: 3,
      tittle: "Black Quarter (BQ)",
      image: require("../assets/cattles/d3.png"),
      desc: "an acute, infectious disease caused by Clostridium chauvoei",
      mainCause:
        "The disease is caused by the bacterium Clostridium chauvoei. The bacterium is found in the soil and is spread by direct contact with infected animals, or by contact with contaminated objects such as feed, water, or equipment.",
      symp: "The disease is characterised by fever, anaemia, tachypnoea, depression, lethargy, jaundice and often eventual death.",
    },
    {
      id: 4,
      tittle: "Brucellosis",
      image: require("../assets/cattles/d4.png"),
      desc: "an infectious disease caused by bacteria",
      mainCause:
        "Brucellosis is caused by the bacterium Brucella abortus. The bacterium is found in the soil and is spread by direct contact with infected animals, or by contact with contaminated objects such as feed, water, or equipment.",
      symp: "The disease is characterised by fever, anaemia, tachypnoea, depression, lethargy, jaundice and often eventual death.",
    },
    {
      id: 5,
      tittle: "Theileriosis",
      image: require("../assets/cattles/d5.png"),
      desc: " characterised by fever, anaemia, tachypnoea, depression, lethargy, jaundice and often eventual death.",
      mainCause:
        "Theileriosis is caused by the bacterium Brucella abortus. The bacterium is found in the soil and is spread by direct contact with infected animals, or by contact with contaminated objects such as feed, water, or equipment.",
      symp: "The disease is characterised by fever, anaemia, tachypnoea, depression, lethargy, jaundice and often eventual death.",
    },
    {
      id: 6,
      tittle: "Anthrax",
      image: require("../assets/cattles/d6.png"),
      desc: "a serious infectious disease caused by gram-positive, rod-shaped bacteria known as Bacillus anthracis.",
      mainCause:
        "Anthrax is caused by the bacterium Bacillus anthracis. The bacterium is found in the soil and is spread by direct contact with infected animals, or by contact with contaminated objects such as feed, water, or equipment.",
      symp: "The disease is characterised by fever, anaemia, tachypnoea, depression, lethargy, jaundice and often eventual death.",
    },
    {
      id: 7,
      tittle: "IBR (Infectious Bovine Rhinotracheitis)",
      image: require("../assets/cattles/d7.png"),
      desc: "a highly contagious and infectious viral disease that affects cattle of all ages.",
      mainCause:
        "IBR is caused by the virus Bovine herpesvirus 1 (BHV-1). The virus is found in the soil and is spread by direct contact with infected animals, or by contact with contaminated objects such as feed, water, or equipment.",
      symp: "The disease is characterised by fever, anaemia, tachypnoea, depression, lethargy, jaundice and often eventual death.",
    },
    {
      id: 8,
      tittle: "Rabies",
      image: require("../assets/cattles/d8.png"),
      desc: "Rabies in livestock, such as cattle, may be rare, but its ability to spread through the herd still poses a serious risk.",
      mainCause:
        "Rabies is caused by the virus Bovine herpesvirus 1 (BHV-1). The virus is found in the soil and is spread by direct contact with infected animals, or by contact with contaminated objects such as feed, water, or equipment.",
      symp: "The disease is characterised by fever, anaemia, tachypnoea, depression, lethargy, jaundice and often eventual death.",
    },
  ];
  const id = route.params.id;
  const selectedOne = data.filter((item) => item.id === id);
  console.log(selectedOne);
  return (
    <>
      <ScrollView>
        <View style={[styles.container, { paddingTop: 30 }]}>
          <MainHeader title={"details"} />
          {/* daat */}
          <View style={styles.wrapper}>
            <View style={styles.left}>
              <Image source={selectedOne[0].image} style={styles.image} />
            </View>
            <View style={styles.right}>
              <Text style={styles.heading}>{selectedOne[0].tittle}</Text>
              <Text style={styles.smallText}>{selectedOne[0].desc}</Text>
            </View>
          </View>
          {/* main cause */}
          <View style={styles.mainCause}>
            <Text style={styles.heading}>Main Causes:</Text>
            <Text style={styles.smallTextlower}>
              {selectedOne[0].mainCause}
            </Text>
          </View>
          <View style={styles.mainCause}>
            <Text style={styles.heading}>Symptoms:</Text>
            <Text style={styles.smallTextlower}>{selectedOne[0].symp}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={makeCall} style={styles.btn}>
          <Text style={styles.txt_btn}>Call For Vaccination</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default DiseaseDetailsScreen;
