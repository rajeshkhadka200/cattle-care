import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
  },
  container: {
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  rsHeading: {
    fontSize: 50,
    color: "#515151",
  },
  rsSmall: {
    color: "#898989",
    fontSize: 18,
  },
  addContainer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "#FEBA47",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightCon: {
    marginLeft: "auto",
  },
  addContainer: {
    marginBottom: 20,
    height: 65,
    width: 65,
    borderRadius: 100,
    backgroundColor: "#FEBA47",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 40,
    color: "#fff",
  },

  greenBox: {
    backgroundColor: "#23BD81",
    height: Dimensions.get("window").height / 2,
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    overflow: "hidden",
    paddingVertical: 50,
  },
  empty: {
    height: 230,
  },
});
