import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

export default function App() {
  const comments=[
  {
    nickname:'Creusa',
    comment:'Lindo da tia!'
  },
  {
    nickname:'Joana',
    comment:'Manda um abraço pra mãe'
  },
]
  return (
    <View style={styles.container} >
      <Header />
      <Post image={require('./src/assets/img/fence.jpg')} comments={comments}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
