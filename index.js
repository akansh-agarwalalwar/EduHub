// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json'; // Assuming your main component is named 'App'

// Register the main component
AppRegistry.registerComponent(appName, () => App);

// Start the app by calling the registered component
AppRegistry.runApplication(appName, {
  initialProps: {},
  });
