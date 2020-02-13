import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './navigation';
class App extends React.Component {
  render() {
    return <View style={styles.container}>
      <Router/>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default App;