import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('./assets/favicon.png')}
            style={styles.backgroundImage}
          />
          <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    

  },
  backgroundImage: {
    width: 100,
    height: 100,
    top: 300,
    alignSelf: 'center',
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
