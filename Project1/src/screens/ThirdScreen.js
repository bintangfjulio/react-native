import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const ThirdScreen = () => {
  return (
    <View
      style={{backgroundColor: 'mistyrose', flex: 1, flexDirection: 'column'}}>
      <View style={{backgroundColor: 'red', flex: 1}}>
        <Text style={{color: 'white'}}>Pikachu</Text>
      </View>
      <View style={{backgroundColor: 'blue', flex: 1}}>
        <Text style={{color: 'red'}}>Flareon</Text>
      </View>
      <View style={{backgroundColor: 'yellow', flex: 1}}>
        <Text style={{color: 'red'}}>Rapidash</Text>
      </View>
    </View>
  );
};

const AddImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ScrollView horizontal={true}>
        {/* <View style={{alignItems: 'center'}}> */}
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/pikachu.png')}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/flareon.png')}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/rapidash.png')}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{
              uri: 'https://i.pinimg.com/originals/30/b5/9b/30b59b7f50c71bb7d2ce9f0fc1c125f2.png',
            }}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{
              uri: 'https://i.pinimg.com/originals/d6/61/96/d66196beb60d306a966ea39ed11c2b3d.png',
            }}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

const ChallengeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', margin: 8}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, color: 'blue'}}>
          Pokemon's Profile
        </Text>
      </View>
      <ScrollView>
        <View style={{margin: 6, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'lavender',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'green',
                margin: 6,
              }}
              source={require('../../assets/images/pikachu.png')}></Image>
            <View
              style={{
                marginLeft: 20,
                marginLeft: 20,
                justifyContent: 'center',
              }}>
              <Text>
                Name : Pikachu {'\n'}
                Categpry : Mouse {'\n'}
                Abilites : Static {'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 6, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'lavender',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'green',
                margin: 6,
              }}
              source={require('../../assets/images/rapidash.png')}
            />
            <View style={{marginLeft: 20, justifyContent: 'center'}}>
              <Text>
                Name : Pikachu{'\n'}
                Category : Mouse{'\n'}
                Abilities : Static{'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 6, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'lavender',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'green',
                margin: 6,
              }}
              source={require('../../assets/images/flareon.png')}
            />
            <View style={{marginLeft: 20, justifyContent: 'center'}}>
              <Text>
                Name : Pikachu{'\n'}
                Category : Mouse{'\n'}
                Abilities : Static{'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 6, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'lavender',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'green',
                margin: 6,
              }}
              source={{
                uri: 'https://i.pinimg.com/originals/d6/61/96/d66196beb60d306a966ea39ed11c2b3d.png',
              }}
            />
            <View style={{marginLeft: 20, justifyContent: 'center'}}>
              <Text>
                Name : Pikachu{'\n'}
                Category : Mouse{'\n'}
                Abilities : Static{'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 6, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'lavender',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'green',
                margin: 6,
              }}
              source={{
                uri: 'https://i.pinimg.com/originals/30/b5/9b/30b59b7f50c71bb7d2ce9f0fc1c125f2.png',
              }}
            />
            <View style={{marginLeft: 20, justifyContent: 'center'}}>
              <Text>
                Name : Bulbasaur{'\n'}
                Category : Seed{'\n'}
                Abilities : Overgrow{'\n'}
                Weaknesses : Fire, Psychic, Flying, Ice
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

// export default AddImage;
// export default ThirdScreen;
export default ChallengeScreen;
