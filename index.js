import { registerRootComponent } from 'expo';
import App from './App';

import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';

enableScreens();

// Global unhandled promise rejection handler


registerRootComponent(App);
