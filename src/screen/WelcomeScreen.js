import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleSignInScreen = () => {
    navigation.navigate('SignInScreen'); // Replace with your desired screen name
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.mButton}>
          <Text style={styles.mButtonText}>M</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>Muvi</Text>
      </View>
      <View style={styles.fakeRightButton}></View>
      <Image
        source={require('../image/loga.jpg')}
        style={styles.logo}
      />

      <Text>Welcome to Muvi</Text>
      <Text style={styles.subtitle}>
        Free movies streaming all your needs; everytime and everywhere.
      </Text>
      <TouchableOpacity
        style={[styles.button, styles.watchMoviesButton]}
        onPress={handleSignInScreen}
      >
        <Text style={styles.buttonText}>Watch Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignInScreen}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20,
        backgroundColor: 'black',
      },
      headerRow: {
        flexDirection: 'row', 
        alignSelf: 'flex-start', 
        alignItems: 'center',
        justifyContent:'space-between',
        width: '100%', 
        marginBottom: 40, 
      },
      backButton: {
        marginRight: 20, 
      },
      backButtonText: {
        fontSize: 24, 
      },
      mButton: {
        backgroundColor: 'gold', 
        padding: 10, 
        marginRight: 5,

         
      },
      mButtonText: {
        fontSize: 20, 
        margin:5,
      },
      titleText: {
        fontSize: 24, 
    
      },
      logo: {
        width: 200, 
        height: 200, 
        marginBottom: 90,
        justifyContent:'center',
      },
      subtitle: {
        textAlign: 'center', 
        marginBottom: 20, 
      },
     
      button: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 10, 
        width: '100%', 
      },
      watchMoviesButton: {
        backgroundColor: 'gold', 
      },
      buttonText: {
        textAlign: 'center', 
      },
});

export default WelcomeScreen;
