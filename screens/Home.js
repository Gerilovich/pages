import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
		<Text>This is Home</Text>
		<Text>This is Home</Text>
      <Button
        onPress={() => navigation.navigate("Second")}
        title="Go!"
      />
		</View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	
	
});