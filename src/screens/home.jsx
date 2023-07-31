import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import getRecipes from "../data/recipe"
import Card from '../components/card'


const Home = ({ navigation }) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(getRecipes(3));
        console.log(`Recipe is ${getRecipes()}`);
    }, [])

    const clickHandler = (id) => {
        navigation.navigate('Recipe-detail', {
            id: id,
        })
    }

    const onNavigate = () => {
        navigation.navigate('Paywall')
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card onPress={() => clickHandler(item.id)}>
                        <Text style={styles.item}>{item.name}
                        </Text>
                    </Card>)}
            />
            <View style={styles.button}>
                <Button 
                onPress={onNavigate}
                title='Unlock All Recipes'
                color='coral'/>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 10
    },
    item: {
        fontWeight: 'bold',
        fontSize: 18
    },
    button: {
        marginTop: 20
    }
});


export default Home;

