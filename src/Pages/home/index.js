import { StyleSheet, Text, View } from 'react-native';
import Header from '../../Components/Header';
import Balance from '../../Components/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Luana Rodrigues'/>
      <Balance saldo='9.920,00' gastos="483,39"/>
      <Text style={styles.title}>Últimas movimentações</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
  }
});
