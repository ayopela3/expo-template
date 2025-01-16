import { Button, ButtonText } from "@/src/components/ui/button";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// WIP
// @ts-ignore
export default function Home(props: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          props.navigation.replace("Auth", { screen: "SignIn" });
        }}
      >
        <ButtonText>Log out</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
