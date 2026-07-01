
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, TextInput  } from 'react-native';

 const Header =() =>{

return(
    <View style={styles.header}>
      <StatusBar style="light" />
      <Text style={styles.text}>
        Login App (Apellido, Apellido)
      </Text>
    </View>


)
 }

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0b2722",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});


export default Header;