import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },

  card: {
    minWidth: 140,
    maxWidth: "45%",
    height: 140,
    borderRadius: 25,
    padding: 15,
    elevation: 5,
    shadowColor: "#000",
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "relative",
    overflow: "hidden",
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  number: {
    fontSize: 14,
    fontWeight: "light",
    color: "#fff",
  },
  imageContainer: {
    position: "absolute",
    bottom: -30,
    left: -25,
    width: 105,
    height: 105,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  totalNumbers: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  lightTitle: {
    fontSize: 14,
  },
});

export default styles;
