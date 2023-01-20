import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    height: 57,
    width: "100%",
    borderRadius: 21,
    backgroundColor: "#26C486",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  detailText: {
    color: "#808080",
    fontSize: 14,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
    flex: 1,
    borderTopEndRadius: 60,
    borderTopStartRadius: 60,
  },
  input: {
    height: 57,
    width: "100%",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    paddingLeft: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: "#8F8F8F",
    marginBottom: 5,
  },
  secButton: {
    backgroundColor: "#D7EEE5",
  },
  secButtonText: {
    color: "#4E4E4E",
  },
  titleContainer: {
    marginTop: 75,
    marginBottom: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    flexDirection: "row",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 40,
    color: "#26C486",
    fontWeight: "bold",
  },
  titleTextSec: {
    color: "#808080",
  },
});

export default styles;
