import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    padding: 30,
  },

  TempCon: {
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    backgroundColor: "#26C486",
    width: "50%",
    padding: 30,
    position: "absolute",
    left: 0,
    bottom: 0,
  },

  heading: {
    fontSize: 18,
    fontWeight: "900",
    color: "white",
  },
  maxCon: {
    marginTop: 25,
  },

  temp: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
  },
});
