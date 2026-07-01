// App.js
import { StyleSheet } from "react-native";
import { SafeAreaView, } from 'react-native-safe-area-context';

import Header from "./src/Header/Header";
import Logo from "./src/Logo/Logo";
import Form from "./src/Form/Form";

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
      <Header />
      <Logo />
      <Form />
    </SafeAreaView>
  );
}
