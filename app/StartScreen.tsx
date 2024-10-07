import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function StartScreen({ navigation } : any) {

    const [mytext, setMytext] = useState("");

    useEffect(() => {
        console.log("START USE EFFECT");
        loadstuff();
    }, []);

    async function loadstuff() {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const thetext = await response.json();

        setMytext(thetext.value);
    }


    return (
      <View>
        <Text>START</Text>

        <Text>{ mytext }</Text>

        <Button title="Read more..." onPress={() => {
            navigation.navigate("ReadmoreScreen", { fruit: "banan"});
        }} />


        <Button title="LOAD" onPress={loadstuff} />

      </View>
    );
  }