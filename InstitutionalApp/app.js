//import React from 'react';
// import {
//   StyleSheet,
//   View,
//   StatusBar
// } from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/components/homeScreen';
import ClientsScreen from './src/components/clientScreen';
import ContactScreen from './src/components/contactScreen';
import BusinessScreen from './src/components/businessScreen';
import ServicesScreen from './src/components/servicesScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Clients: { screen: ClientsScreen },
  Contact: { screen: ContactScreen },
  Business: { screen: BusinessScreen },
  Services: { screen: ServicesScreen },
});

//export default class App extends Component {
//   render() {
//     return (
//       <HomeScreen />
//     );
//   }
// }

export default App;
