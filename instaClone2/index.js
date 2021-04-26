import { registerRootComponent } from 'expo';
import Navig from './src/Navigator'

import axios from 'axios'

axios.defaults.baseURL= 'https://instaclone-11300-default-rtdb.firebaseio.com/'
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Navig);
