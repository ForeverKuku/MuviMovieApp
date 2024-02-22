import React from 'react';
import {  Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


const GetStarted = ({ navigation }) => {
    const handleWelcomeScreen = () => {
      navigation.navigate('WelcomeScreen'); 
    };


  return (
    <ImageBackground
    source={require('../image/joker.jpeg')}
    style={styles.container}
  >
    
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text> 
      </TouchableOpacity>
    <Text style={styles.title}>Enjoy your favorite movie everywhere</Text>
    <Text style={styles.subtitle}>
      Browse through our collections and discover hundreds of movies and series that you’ll love!
    </Text>
    <TouchableOpacity style={styles.button} onPress={handleWelcomeScreen}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  </ImageBackground>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 20, 
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF', 
        textAlign: 'center',
        marginTop: 'auto', 
       
      },
      subtitle: {
        fontSize: 16,
        color: '#FFFFFF', 
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop:130,
      },
      button: {
        backgroundColor: 'gold', 
        paddingHorizontal: 0, 
        paddingVertical: 10, 
        borderRadius: 5, 
        alignSelf: 'stretch',
        
      },
      buttonText: {
        fontSize: 20,
        color: '#000000', 
        textAlign: 'center', 
      },
      backButton: {
        alignSelf: 'flex-start', 
        marginTop: 10, 
      },
      backButtonText: {
        fontSize: 24, 
        color: '#FFFFFF', 
      },
});

export default GetStarted;
