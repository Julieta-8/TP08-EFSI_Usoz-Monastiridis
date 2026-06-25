
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
<TextInput
style ={styles.input}
placeholder='ingrese..'
onChangeText={handleNombreChange}
value={nombre}
/>
<Button
title='Ingresar'
onPress ={()=> Alert.alert('A')}/>
<Text>Olvidaste la clave?</Text>
<Text>Crear Cuenta</Text>

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