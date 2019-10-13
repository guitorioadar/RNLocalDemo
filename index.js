/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import AsyncExample from './src/screens/AsyncExample'
import SyncExample from './src/screens/SyncExample'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
