import { Text, View } from "react-native";

export default function ReadmoreScreen({ route, navigation }) {

    const { fruit } = route.params;

    return (
      <View>
        <Text>READ MORE</Text>
        <Text>{fruit}</Text>
      </View>
    );
  }