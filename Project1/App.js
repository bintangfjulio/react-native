import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import FirstScreen from './src/screens/FirstScreen';
// import ChalengeScreen from './src/screens/FirstScreen';
// import SecondScreen from './src/screens/SecondScreen';
import ChallengeScreen from './src/screens/SecondScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <FirstScreen /> */}
      {/* <ChalengeScreen /> */}
      {/* <SecondScreen /> */}
      <ChallengeScreen />
    </SafeAreaProvider>
  );
};

export default App;
