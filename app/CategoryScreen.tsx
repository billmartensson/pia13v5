import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function CategoryScreen({ route, navigation }) {

    const [mytext, setMytext] = useState("");

    const { categorynamn } = route.params;

    useEffect(() => {
        loadJoke();
    }, []);

    async function loadJoke() {
        const response = await fetch("https://api.chucknorris.io/jokes/random?category=" + categorynamn);
        const apijson = await response.json();

        setMytext(apijson.value);
    }

    return (
      <View>
        <Text>CATEGORY</Text>
        <Text>{ categorynamn }</Text>
        <Text>{ mytext }</Text>
      </View>
    );
  }