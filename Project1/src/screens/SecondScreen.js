import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const SecondScreen = () => {
  const openAlert = game => {
    alert(`You choose ${game}`);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'skyblue',
          padding: 10,
          margin: 8,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: 'red',
          borderStyle: 'dashed',
        }}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'serif',
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Mobile Legends
        </Text>
        <Text style={{textAlign: 'justify', color: 'black'}}>
          <Text style={{color: 'purple', fontWeight: 'bold'}}>
            Mobile Legends
          </Text>
          is a multiplayer online battle arena (MOBA) game. The two opposing
          teams fight to reach and destroy the enemy"s base while defending
          their own base for control of a path.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert('Mobile Legends!')}>
          <Text style={{color: 'lightcoral'}}>Mobile Legends Button</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: 'cornflowerblue',
          padding: 10,
          margin: 8,
          borderRadius: 10,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: 'blue',
          borderStyle: 'dotted',
        }}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'serif',
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          PUBG
        </Text>
        <Text style={{textAlign: 'justify', color: 'black'}}>
          <Text style={{color: 'purple', fontWeight: 'bold'}}>
            PlayerUnknown's Battlegrounds
          </Text>
          , better known as PUBG, is a multiplayer battle royale game in which
          players drop onto an island and fight to be the last one left
          standing.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert('PUBG')}>
          <Text style={{color: 'lightcoral'}}>PUBG Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ChallengeScreen = () => {
  const openAlert = os => {
    alert(`You choose ${os}`);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'red',
            textDecorationLine: 'underline',
            marginBottom: 5,
            textTransform: 'uppercase',
          }}>
          iOS
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderRadius: 15,
          backgroundColor: 'white',
          borderWidth: 5,
          borderStyle: 'dotted',
          borderColor: 'black',
        }}>
        <Text style={{textAlign: 'justify', color: 'black'}}>
          <Text style={{fontWeight: 'bold'}}>iOS</Text> (formerly iPhone OS) is
          a mobile operating system created and developed by{' '}
          <Text style={{color: 'pink', fontStyle: 'italic'}}>Apple Inc.</Text>{' '}
          exclusively for its hardware. It is the operating system that powers
          many of the company"s mobile devices, including the iPhone and iPod
          Touch.
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 8,
            margin: 8,
            borderRadius: 10,
            borderWidth: 1,
          }}
          onPress={() => openAlert('iOS')}>
          <Text style={{color: 'white', textAlign: 'center'}}>Choose</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 25}}>
        <Text>VS.</Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'green',
            textDecorationLine: 'underline',
            marginBottom: 5,
            textTransform: 'uppercase',
          }}>
          Android
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderRadius: 15,
          backgroundColor: 'grey',
          borderWidth: 5,
          borderStyle: 'dotted',
          borderColor: 'black',
        }}>
        <Text style={{textAlign: 'justify', color: 'black'}}>
          <Text style={{fontWeight: 'bold'}}>Android</Text> is a mobile
          operating system based on a modified version of the Linux kernel and
          other open source software, designed primarily for touchscreen mobile
          devices such as smartphones and tablets. Android is developed by a
          consortium of developers known as the{' '}
          <Text style={{color: 'purple', fontStyle: 'italic'}}>
            Open Handset Alliance
          </Text>{' '}
          and commercially sponsored by{' '}
          <Text style={{color: 'blue', fontStyle: 'italic'}}>Google</Text>.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 8,
            margin: 8,
            borderRadius: 10,
            borderWidth: 1,
          }}
          onPress={() => openAlert('Android')}>
          <Text style={{color: 'white', textAlign: 'center'}}>Choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// export default SecondScreen;
export default ChallengeScreen;
