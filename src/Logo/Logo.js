
const [nombre, handleNombreChange] = React.useState('');
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, StyleSheet, Text, View, Button, TextInput  } from 'react-native';
const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/cocacola.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 35,
    marginBottom: 30,
  },

  logo: {
    width: 220,
    height: 110,
    backgroundColor: "white",
  },
});
export default Logo;