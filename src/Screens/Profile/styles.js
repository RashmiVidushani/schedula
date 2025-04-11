import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00e0ff',
    marginBottom: 20,
    textAlign: 'center',
  },
  nameContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", 
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: "#fff", 
  },
  contactContainer: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", 
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#2c2c2c", 
    color: "#fff", 
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  inputEditable: {
    backgroundColor: "#444", 
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#00e0ff", 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#FF6B6B",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#00e0ff", 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff", 
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelbuttonText: {
    color: "#fff", 
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
