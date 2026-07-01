
const [nombre, handleNombreChange] = React.useState('');
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, TextInput  } from 'react-native';

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

    <View  style={styles.container}>
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



)
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#8B5CF6",
    borderRadius: 3,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "white",
  },

  boton: {
    backgroundColor: "#7C4DFF",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginTop: 10,
  },

  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  mensaje: {
    marginTop: 15,
    textAlign: "center",
    color: "red",
  },

  link: {
    marginTop: 20,
    textAlign: "center",
    color: "#444",
  },

  crear: {
    marginTop: 12,
    textAlign: "center",
    fontWeight: "600",
    color: "#000",
  },
});

export default Form;
