import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icons from './components/icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#495CBA', '#546ABD', '#4F63BC']}
        style={styles.gradient}>

<Icons />
        <StatusBar style="light"
        backgroundColor='transparent'/>
     </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    justifyContent:"flex-end",
    height: '100%',
    width:'100%',
  },
});
