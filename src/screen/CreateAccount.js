import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const CreateAccount = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleHomeScreen = () => {
  let valid = true;

  // Reset error messages
  setEmailError('');
  setPasswordError('');

  if (!email.trim()) {
    setEmailError('Email is required');
    valid = false;
  }

  if (!password) {
    setPasswordError('Password is required');
    valid = false;
  }

  if (valid) {
    
    navigation.navigate('HomeScreen');
      };
    }


  return (
    <ImageBackground
      source={require('../image/harry.jpg')}
      style={styles.container}
    >
     <View style={styles.overlay}>
  <View style={[styles.header, { flexDirection: 'row', alignItems: 'center' }]}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backButtonText}>←</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.mButton}>
      <Text style={styles.mButtonText}>M</Text>
    </TouchableOpacity>
    <Text style={styles.muviText}>Muvi</Text>
  </View>
  <Text style={[styles.title, { flex: 1, textAlign: 'left', marginTop:10 }]}>SignUp</Text>
  <View style={styles.inputContainer}>
    <MaterialIcons name="email" size={20} color="gold" />
    <TextInput
      placeholder="Email Address"
      placeholderTextColor="white"
      style={styles.input}
      keyboardType="email-address"
      autoCapitalize="none"
      onChangeText={(text) => setEmail(text)}
      value={email}
    />
  </View>
  {emailError.length > 0 && <Text style={styles.errorText}>{emailError}</Text>}
  <View style={styles.inputContainer}>
    <MaterialIcons name="lock" size={20} color="gold" />
    <TextInput
      placeholder="Password"
      placeholderTextColor="white"
      style={styles.input}
      secureTextEntry
      onChangeText={(text) => setPassword(text)}
      value={password}
    />
  </View>
  {passwordError.length > 0 && <Text style={styles.errorText}>{passwordError}</Text>}
  
  <TouchableOpacity style={styles.loginButton} onPress={handleHomeScreen}>
    <Text style={styles.loginButtonText}>SignUp</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.forgotPasswordButton}>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </TouchableOpacity>

  
  <View style={{ alignItems: 'center', marginTop: 20, alignItems: 'flex-start' }}>
    <Text style={styles.orText}>or sign in with:</Text>
    <View style={styles.socialButtons}>
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="facebook" size={20} color="#3b5998" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="google" size={20} color="#DB4437" />
      </TouchableOpacity>
  </View>
</View>
</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
      },
      overlay: {
        flex: 1,
        padding: 20,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
      },
      backButton: {
        marginRight: 10,
        padding:10,
      },
      backButtonText: {
        fontSize: 34,
        color: 'white',
        fontWeight:'bold',
      },
      mButton: {
        marginRight: 20,
        padding: 20,
        backgroundColor: 'gold',
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
      },
      mButtonText: {
        fontSize: 20,
        color: '#000',
        fontWeight:'bold',
      },
      muviText: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginLeft:10
      },
      title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        flex: 1,
      },
      inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingBottom: 8,
        marginBottom: 20,
      },
      input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 14,
      },
      loginButton: {
        backgroundColor: 'gold',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
      },
      loginButtonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginTop:10,
      },
      createAccountButton: {
        alignItems: 'center',
      },
      createAccount: {
        fontSize: 16,
        color: 'white',
        textDecorationLine: 'underline',
      },
      forgotPasswordButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
      },
      forgotPassword: {
        fontSize: 17,
        color: 'white',
        textDecorationLine: 'underline',
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
      },
      orText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
        color:'white',
      },
      socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5, 
        flexDirection: 'row', 
        marginTop: 10, 
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
      socialButton: {
        padding: 10,
        borderRadius: 3,
        backgroundColor: 'gray',
        fontWeight:'bold',
        marginHorizontal: 10,
      },
});


export default CreateAccount;
