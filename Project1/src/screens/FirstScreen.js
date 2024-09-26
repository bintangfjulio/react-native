import React from 'react';
import {View, Text, Button} from 'react-native';

const FirstScreen = () => {
  const openAlert = () => {
    alert('You clicked the button!');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{margin: 16}}>
        Hello<Text style={{color: 'red'}}> World</Text>!
      </Text>
      <Button title="This is button" onPress={openAlert} />
    </View>
  );
};

const ChallengeScreen = () => {
  const showAlert = () => {
    alert('You are awesome!');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
      }}>
      <Text style={{color: 'green', margin: 12, fontSize: 16}}>
        Let's Learn React Native Framework
      </Text>
      <Text style={{margin: 8}}>My name is Alya</Text>
      <Text style={{margin: 8}}>
        Now I'm learning about{' '}
        <Text style={{color: 'blue'}}>React Native Components</Text> to build
        the user interface for android apps
      </Text>
      <Text style={{margin: 8, color: 'red'}}>I Love Coding</Text>
      <Button title="Click Me" onPress={showAlert} />
    </View>
  );
};

// export default FirstScreen;
export default ChallengeScreen;
