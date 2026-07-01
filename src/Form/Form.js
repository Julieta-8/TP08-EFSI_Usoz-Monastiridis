
const [nombre, handleNombreChange] = React.useState('');
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, TextInput  } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';

 const Form =() =>{
const [usuario, setUsuario] = useState("");
const [password, setPassword] = useState("");
const [mensaje, setMensaje] = useState("");

  const ingresar = () => {

    if(usuario === "flecha" && password === "1234"){
        setMensaje("Ingreso correcto");
    }
    else{
        setMensaje("Usuario o contraseña incorrectos");
    }

}
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
    onPress={ingresar}
/>
     {mensaje !== "" &&
    <Text>{mensaje}</Text>
}
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
