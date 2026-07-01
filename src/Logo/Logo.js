
const [nombre, handleNombreChange] = React.useState('');
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, StyleSheet, Text, View, Button, TextInput  } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';

 const Logo =() =>(

  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Image
        style={{
          borderColor: 'red',
          borderWidth: 5,
          height: 100,
          width: 200,
        }}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Text>borderColor & borderWidth</Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Logo;