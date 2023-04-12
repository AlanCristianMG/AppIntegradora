/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from './android/src/screens/Login';

AppRegistry.registerComponent(appName, () => App);
