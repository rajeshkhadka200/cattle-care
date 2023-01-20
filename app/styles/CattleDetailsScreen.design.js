import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cardContainer: {
    alignItems: "center",
    padding: 10,
  },
  card: {
    width: "100%",
    height: 90,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 12,
    shadowColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderColor: "#ddd",
    borderWidth: 0.5,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 50,
    objectFit: "cover",
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
  name: {
    fontSize: 18,
    fontWeight: "bolder",
    color: "#000",
  },
  age: {
    fontSize: 12,
    fontWeight: "light",
    color: "#000",
  },
  add: {
    backgroundColor: "#FEBA47",
    width: 80,
    height: 80,
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 45,
    color: "#fff",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#fff",
    width: "100%",
    height: 420,
    position: "absolute",
    bottom: 0,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 1,
    elevation: 5,
  },
  popupImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    objectFit: "cover",
  },
  popupTitle: {
    fontSize: 32,
    fontWeight: "bolder",
    color: "#000",
  },
  pupupback: {
    backgroundColor: "#000000aa",
    width: "200%",
    height: "200%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
});

export default styles;
