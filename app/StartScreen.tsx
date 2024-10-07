import { Button, Text, View } from "react-native";

export default function StartScreen({ navigation } : any) {
    return (
      <View>
        <Text>START</Text>

        <Button title="Read more..." onPress={() => {
            navigation.navigate("ReadmoreScreen", { fruit: "banan"});
        }} />

      </View>
    );
  }