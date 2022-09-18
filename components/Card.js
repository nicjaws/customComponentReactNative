import { View, Text, Image } from "react-native";
import React from "react";

const Card = ({ name, description, image, size }) => {
  return (
    <View
      style={{
        width: 350,
        height: 526,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 30,
        marginBottom: 30,
      }}
    >
      <Image
        style={{ width: "100%", height: 420, borderRadius: 20 }}
        source={{ uri: image }}
      />
      <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 10 }}>
        {name}
      </Text>
      <Text style={{ fontSize: 18, marginTop: 10, color: "gray" }}>
        {description}
      </Text>
    </View>
  );
};

export default Card;
