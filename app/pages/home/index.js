import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
const Home = ({ navigation }) => {
    return <View
        style={styles.container}
    >
        <Text>Home</Text>
        <Button
            title="Go To Test"
            onPress={() => {
                navigation.navigate("Test");
            }}
        />
    </View>
}
Home.navigationOptions = ({ navigation }) => ({
    header: <View
        style={{
            width: "100%",
            height: 60,
            flexDirection: "row"
        }}
    >
        <View
            style={{
                width: 60,
                height: "100%"
            }}
        >
            <TouchableOpacity
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10
                }}
            >
                <Text numberOfLines={2}>Deneme DAGJASD DAGJ AKSasf</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Başlık</Text>
        </View>
        <View
            style={{
                width: 60,
                height: "100%"
            }}
        >
            <TouchableOpacity
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "pink",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10
                }}
            >
                <Text numberOfLines={2}>Deneme DAGJASD DAGJ AKSasf</Text>
            </TouchableOpacity>
        </View>
    </View>
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    }
});
export default Home;