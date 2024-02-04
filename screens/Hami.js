import {
  StyleSheet,
  Text,
  View,
  Image,
  Share,
  TouchableOpacity,
} from "react-native";

export default function Hami() {
  const shareImage = async () => {
    try {
      const result = await Share.share({
        message: "¡Logrado!",
        url: "../assets/HamImage.png",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Imagen compartida con éxito a ${result.activityType}`);
        } else {
          console.log("Imagen compartida con éxito");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Compartir cancelado");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sí soy</Text>
      <Image style={styles.image} source={require("../assets/HamImage.png")} />
      <Text style={styles.title}>Comparte por WhatsApp si lo lograste</Text>
      <TouchableOpacity style={styles.button} onPress={shareImage}>
        <Text style={styles.textButton}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#66A834",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
  button: {
    width: 80,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    backgroundColor: "green",
  },
  textButton: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
