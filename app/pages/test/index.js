import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
const Test = ({ navigation }) => {
    return <View
        style={styles.container}
    >
        <Text>Test</Text>
        <Button
            title="Go To Home"
            onPress={() => {
                navigation.navigate("Home");
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow"
    }
});
export default Test;