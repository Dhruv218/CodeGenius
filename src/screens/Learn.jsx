import React from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Learn(props) {
  return (
    <><Text className='absolute'></Text>
      <ScrollView className="bg-white">
        <Image
          className="h-[300px] w-full object-cover"
          source={require('../assets/lheader.gif')}></Image>
        <Text className="text-[25px] text-center text-purple-500 font-bold ">
          What we have for you ...
        </Text>
        <Text className="text-black  pl-8 text-[18px]">
          <Text className="text-[25px] font-bold text-red-500">{'->  '} </Text>
          Personalized Modules
        </Text>
        <Text className="text-black  pl-8 text-[18px]">
          <Text className="text-[25px] font-bold text-red-500">{'->  '} </Text>
          Industry Level Projects
        </Text>
        <Text className="text-black  pl-8 text-[18px]">
          <Text className="text-[25px] font-bold text-red-500">{'->  '} </Text>
          Certificate From Fang
        </Text>
        <Text className="text-black  pl-8 text-[18px]">
          <Text className="text-[25px] font-bold text-red-500">{'->  '} </Text>
          Placement Opportunities
        </Text><Text className="text-black  pl-8 text-[18px]">
          <Text className="text-[25px] font-bold text-red-500">{'->  '} </Text>
          Personal Growth
        </Text>
        
      </ScrollView>
    </>
  );
}

export default Learn;
