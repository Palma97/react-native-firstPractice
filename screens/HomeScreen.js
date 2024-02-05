import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Burro Selector</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Selector")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/originals/3b/6f/53/3b6f53611eade9761273ce800c2bc1dd.png",
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>
        Press the image and choose the real donkey
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    margin: 50,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
    margin: 50,
    resizeMode: "contain",
  },
});
