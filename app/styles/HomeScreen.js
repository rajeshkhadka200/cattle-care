import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    padding: 30,
  },

  TempCon: {
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    backgroundColor: "#22AC77",
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
  pettle: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
  },
  thungo: {
    // elevation: 5,
    backgroundColor: "white",
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  cattle: {
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
  },
  health: {
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  income: {
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  expense: {
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: "#FEBA47",
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: 50,
    marginLeft: -25,
    marginTop: -25,
  },
  txt: {
    color: "#5A5A5A",
    fontWeight: "500",
    marginTop: 5,
  },

  steam: {
    position: "absolute",
    top: 130,
    left: 150,
    zIndex: -1,
  },
  flower: {
    marginTop: 100,
  },
});
