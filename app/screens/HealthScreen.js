import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/Health.design.js";
import DiseaseCard from "../components/DiseaseCard.js";
import MainHeader from "../components/MainHeader.js";

const HealthScreen = () => {
  const data = [
    {
      tittle: "Food And Mouth Disease (FMD)",
      image: require("../assets/cattles/d1.png"),
      desc: "causes severe production losses, the disease often leaves them  weakened and debilitated.",
    },
    {
      tittle: "Haemorrhagic Septicaemia (HS)",
      image: require("../assets/cattles/d2.png"),
      desc: "a bacterial disease that mainly affects cattle and water buffalo.",
    },
    {
      tittle: "Black Quarter (BQ)",
      image: require("../assets/cattles/d3.png"),
      desc: "an acute, infectious disease caused by Clostridium chauvoei",
    },
    {
      tittle: "Brucellosis",
      image: require("../assets/cattles/d4.png"),
      desc: "an infectious disease caused by bacteria",
    },
    {
      tittle: "Theileriosis",
      image: require("../assets/cattles/d5.png"),
      desc: " characterised by fever, anaemia, tachypnoea, depression, lethargy, jaundice and often eventual death.",
    },
    {
      tittle: "Anthrax",
      image: require("../assets/cattles/d6.png"),
      desc: "a serious infectious disease caused by gram-positive, rod-shaped bacteria known as Bacillus anthracis.",
    },
    {
      tittle: "IBR (Infectious Bovine Rhinotracheitis)",
      image: require("../assets/cattles/d7.png"),
      desc: "a highly contagious and infectious viral disease that affects cattle of all ages.",
    },
    {
      tittle: "Rabies",
      image: require("../assets/cattles/d8.png"),
      desc: "Rabies in livestock, such as cattle, may be rare, but its ability to spread through the herd still poses a serious risk.",
    },
  ];
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <MainHeader title={"Health"} />
          <View style={styles.wrapper}>
            <Text style={styles.heading}>Protect cattles</Text>
            <Text style={styles.small_text}>
              Cattles require scheduled vaccination and health care like we do.
            </Text>

            {/* wrapper for card */}
            <View style={styles.con_disease}>
              {data.map((data, i) => {
                return <DiseaseCard key={i} data={data} />;
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HealthScreen;
