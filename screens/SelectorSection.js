import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function SelectorSection() {
  const navigation = useNavigation();
  /* const ome = (imageId) => {
    if (imageId === "image-2") {
      navigation.navigate("Hami");
    } else {
      navigation.navigate("Snoop");
    }
  }; */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione el más burro</Text>
      <View style={styles.container2}>
        <View style={styles.view}>
          <TouchableOpacity onPress={() => navigation.navigate("¡Este no es!")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/07/07/16887455228180.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("¡Hami!")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://scontent.feoh2-1.fna.fbcdn.net/v/t1.6435-9/121225826_402255690800698_4561459557349539588_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=fluwP5txZwIAX9VECm2&_nc_ht=scontent.feoh2-1.fna&oh=00_AfB0U7cB8ObfVKcxB1tOLPCca0uJ7tFdHY1xEyvBEW78Zw&oe=65E34ECC",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.view}>
          <TouchableOpacity onPress={() => navigation.navigate("¡Este no es!")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://graziamagazine.com/mx/wp-content/uploads/sites/13/2018/11/snoop-dogg-se-agradece-a-si-mismo-por-su-estrella-en-el-hollywood-walk-of-fame-destacada.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("¡Este no es!")}>
            <Image
              style={styles.image}
              source={{
                uri: "https://peopleenespanol.com/thmb/PV2BCyIrI7Jwl8leqzQOMCikLL8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wiz-Khalifa-AIDS-Foundation-Award-2000-6f01c1547752417690c63b1eda44f30d.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
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
    fontSize: 25,
    marginBottom: 80,
    textAlign: "center",
  },
  image: {
    width: 130,
    height: 130,
    margin: 35,
    resizeMode: "contain",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
  view: {
    flex: 1,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
