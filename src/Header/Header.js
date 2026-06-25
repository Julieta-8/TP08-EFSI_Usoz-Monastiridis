
const [nombre, handleNombreChange] = React.useState('');
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Button, TextInput  } from 'react-native';

 const Header =() =>{

return(
<SafeAreaView style={styles.container}>
    <View>
<StatusBar style = 'light'/>
<Text>Login App(Apellido, Apellido)</Text>


</View>
</SafeAreaView>


)

const styles = StyleSheet.create({
  

});

}
export default Header;