import { View, Text, Image } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 1 / 3,
          backgroundColor: "#ffffff",
          justifyContent: "flex-end",
          padding: 10,
        }}
      >
        ยินดีตอนรับ
      </View>
      <View
        style={{
          flex: 7,
          gap: 20,
          padding: 10,
          alignItems: "center",
          backgroundColor: "#00BFFF",
        }}
      >
        <Image
          style={{
            width: 120,
            height: 160,
            objectFit: "cover",
            alignItems: "start",
          }}
          source={require(".././assets/lru.png")}
        />
        <Text style={{ fontSize: 16, color: "white", alignItems: "center" }}>
          สมุนไพรท้องถิ่นไทเลย
        </Text>
        <Image
          style={{
            width: 300,
            height: 250,
            objectFit: "cover",
            alignItems: "flex-end",
            borderRadius: 10,
          }}
          source={require(".././assets/overview.png")}
        />
        <View
          style={{
            flex: 1,
            width: "33.333333%",
            display: "flex",
            flexDirection: "row",
            gap: 20,
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: "100%", height: 100, borderRadius: 5 }}
            resizeMode="cover"
            source={require(".././assets/holy.png")}
          />
          <Image
            style={{ width: "100%", height: 100, borderRadius: 5 }}
            resizeMode="cover"
            source={require(".././assets/spicy.jpg")}
          />
          <Image
            style={{ width: "100%", height: 100, borderRadius: 5 }}
            resizeMode="cover"
            source={require(".././assets/aloe-vera.jpg")}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FF1493",
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>
          คณะวิทยาศาสตร์และเทคโนโลยี
        </Text>
        <Text style={{ fontSize: 15, color: "white" }}>
          มหาวิทยาลัยราชภัฏเลย
        </Text>
      </View>
    </View>
  );
};

export default Splash;
