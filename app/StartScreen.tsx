import { useEffect, useState } from "react";
import { Button, FlatList, Pressable, Text, TextInput, View } from "react-native";

export default function StartScreen({ navigation } : any) {

    const [mytext, setMytext] = useState("");

    const [searchtext, setSearchtext] = useState("");

    const [categories, setCategories] = useState(["a", "b", "c"]);

    useEffect(() => {
        console.log("START USE EFFECT");
        loadJoke();
        loadCategories();
    }, []);

    async function loadJoke() {
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const apijson = await response.json();
    
            setMytext(apijson.value);    
        } catch (error) {
            setMytext("ERROR ERROR!!!");
        }
    }
    async function loadCategories() {
        const response = await fetch("https://api.chucknorris.io/jokes/categories");
        const apijson = await response.json();

        setCategories(apijson);
    }
    async function searchJoke() {
        const response = await fetch("https://api.chucknorris.io/jokes/search?query=" + searchtext);
        const apijson = await response.json();

        if(apijson.total == 0) {
            setMytext("NO JOKE");
        } else {
            setMytext(apijson.result[0].value);
        }
    }


    return (
      <View>
        <Text>START</Text>

        <Text>{ mytext }</Text>

        <Button title="Read more..." onPress={() => {
            navigation.navigate("ReadmoreScreen", { fruit: "banan"});
        }} />


        <Button title="LOAD ANOTHER JOKE" onPress={loadJoke} />

        <TextInput onChangeText={setSearchtext} value={searchtext} />
        <Button title="SEARCH" onPress={searchJoke} />



        <FlatList data={categories} renderItem={(item) => 
            <Pressable onPress={() => {
                navigation.navigate("CategoryScreen", { categorynamn: item.item});
            }}>
                <Text>{ item.item }</Text>
            </Pressable> 
        } />

      </View>
    );
  }