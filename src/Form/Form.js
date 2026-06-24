
const [nombre, handleNombreChange] = React.useState('');
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Button, TextInput  } from 'react-native';

 const Form =() =>{

return(
<SafeAreaView style={styles.container}>
    <View>
<Text>Nombre</Text>

<TextInput
style ={styles.input}
placeholder='ingrese..'
onChangeText={handleNombreChange}
value={nombre}
/>
<Button
title='Presioname'
onPress ={()=> Alert.alert('A')}/>
</View>
</SafeAreaView>


)

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center',
        marginHorizontal: 16,
    },
    title:{
        textAlign: 'center', marginVertical:8,
    },

});

}
export default Form;