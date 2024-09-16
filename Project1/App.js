import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import FirstScreen from './src/screens/FirstScreen';
import ChalengeScreen from './src/screens/FirstScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <FirstScreen /> */}
      <ChalengeScreen />
    </SafeAreaProvider>
  );
};

export default App;
