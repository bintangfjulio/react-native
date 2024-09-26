import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import FirstScreen from './src/screens/FirstScreen';
// import ChallengeScreen from './src/screens/FirstScreen';
// import SecondScreen from './src/screens/SecondScreen';
// import ChallengeScreen from './src/screens/SecondScreen';
// import ThirdScreen from './src/screens/ThirdScreen';
// import AddImage from './src/screens/ThirdScreen';
import ChallengeScreen from './src/screens/ThirdScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <ChallengeScreen />

      {/* <FirstScreen /> */}
      {/* <SecondScreen /> */}
      {/* <ThirdScreen /> */}
      {/* <AddImage /> */}
    </SafeAreaProvider>
  );
};

export default App;
