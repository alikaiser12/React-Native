import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "react-native";

<StatusBar barStyle="dark-content" />;

const UpcomingWeather = () => {
  return (
    <SafeAreaView syles={styles.container}>
      <Text>Upcoming Weather</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default UpcomingWeather;
