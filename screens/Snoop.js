import { StyleSheet, Text, View, Image } from "react-native";

export default function Snoop() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: "https://media.tenor.com/XTiqQYf6f_UAAAAM/no-donkeys.gif",
          }}
        />
      </View>

      <Text style={styles.title}>Nelson, mano. Este no es.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8072B",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    margin: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 250,
    margin: 0,
    resizeMode: "contain",
  },
  containerImage: {
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 10,
  },
});
