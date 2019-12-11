/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// annoying react-native-reanimated warning
console.disableYellowBox = true;

import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';


//import MyTabs from './MyTabs'
import {PagerProvider, Pager, Slider  } from '@crowdlinker/react-native-pager';
import ImageCard from './ImageCard'

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree'
]

const children = Array.from({length: images.length}, (_, i) => <ImageCard key={i} imageUrl={images[i]} />);

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function onChange(nextIndex) {
    // console.log({nextIndex});
    setActiveIndex(nextIndex);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
        <PagerProvider activeIndex={activeIndex} onChange={onChange}>
          <Pager
          style={{
            height: 200,
            width: 400,
            overflow: 'hidden',
            alignSelf: 'center',
          }}
          >
            {children}
          </Pager>
          <View style={{paddingTop: 0}}>
            <Slider
              numberOfScreens={4}
              style={{height: 5, backgroundColor: 'red'}}
            />
          </View>
        </PagerProvider>
      </View>
    </SafeAreaView>
  );
};

export default App;