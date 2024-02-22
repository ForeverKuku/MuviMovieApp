import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Implement your sign-in logic here
    alert('Sign In button pressed');
  };

  return (
    <ImageBackground
    source={require('../image/joker.jpeg')}
    style={styles.container}
  >
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text> 
      </TouchableOpacity>
        <Text>M</Text>
        <Text>Muvi</Text>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email Address"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or sign in with:</Text>
      {/* Add social login buttons/icons here */}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width:'100%'
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPassword: {
    color: 'gray',
    fontSize: 16,
    marginTop: 10,
  },
  orText: {
    color: 'gray',
    fontSize: 16,
    marginTop: 20,
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

export default SignInScreen;
