import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Shopcard from './components/Shopcard';
import Total from './components/Total';

export default function App() {
  return (
    <View style={styles.container}>
      <Header itemsCount={3}/>
      <Shopcard/>
      <Shopcard/>
      <Shopcard/>
      <Total/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F87C63',
    alignItems: 'center',
  },
});
// #FCC6BB;
// #FAA18F;
// #F87C63;
// #F54927;
// #F4320B;
// #C82909;
// #9C2007;
// #701705;
// #440E03;
// #180501;