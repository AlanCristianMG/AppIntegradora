import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import bcrypt from 'bcryptjs';
import {EmailAlert,EmptyAlert,showAlert} from '../components/Alerts';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from '../navigation/Stack';
import Dashboard from './Dashboard';

  

const LoginScreen = ({setLoggedIn}) => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email=="" || email==null || password=="" || password==null) {
            EmptyAlert()
        }else{
                fetch("https://robotshop.tech/auth/"+email)
                .then(async response => {
                if (response.ok) {
                    const user = await response.json();
                    const hashedPassword = user.password;
                    const isMatch = bcrypt.compareSync(password, hashedPassword);

                  if (isMatch) {
                      console.log("Coincide")
                      setLoggedIn(true);
                  } else {
                      console.log("no coincide")
                      showAlert();
                  // La contraseña es incorrecta, mostrar un mensaje de error
                  }
                } else {
                    throw new Error('Error en la respuesta de la solicitud.');
                }
                })
                .catch(error => {
                    EmailAlert();
                });
            }   
        }
 
  return (

      <View style={styles.container}>
          <Image
            source={require('../imgs/Logo.png')} // Aquí debes agregar la ruta a tu imagen de logo
            style={styles.logo}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#707070"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#707070"
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
      </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    marginTop: 45
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#008CBA',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
