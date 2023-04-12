import { Alert } from 'react-native';
export const showAlert = () => {
    Alert.alert(
      'Datos Incorrectos',
      'Verifique su informacion',
      [{ text: 'Aceptar' }]
    );
  };
  
export const EmailAlert = () => {
      Alert.alert(
        'Email incorrecto',
        'El usuario no existe',
        [{ text: 'Aceptar' }]
      );
    };
    
    
  
export const EmptyAlert = () => {
      Alert.alert(
        'No puede dejar campos vacios',
        'Llena los campos',
        [{ text: 'Aceptar' }]
      );
    };