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

function MarketPlace(props) {
  return (
    <><Text className='absolute'></Text>
      <ScrollView className="bg-white">
        <Image
          className="h-[300px] w-full object-contain"
          source={require('../assets/marketheader.gif')}></Image>
        <Text className="text-[25px] text-start pl-8 mt-4 text-red-500 font-bold ">
          About Us
        </Text>
        <View className="flex flex-col gap-1 pl-8  mt-1">
          <Text className=" text-[16px]   text-green-500  font-normal">
            {`\u2022`} partner with trusted brands and industry experts.
          </Text> 
          <Text className=" text-[16px] text-purple-700 text-left font-normal">
          {`\u2022`} diverse range of products for coders of all levels.          </Text> 
          <Text className=" text-[16px]   text-orange-500  font-normal">
          {`\u2022`} user-friendly platform        </Text>
           
        </View><Text className="text-[25px] text-start pl-8 mt-4 text-black font-bold ">
          Our dedicated team provides excellent <Text className='text-[25px]  font-bold text-red-500'>  customer support.</Text>
        </Text>
      </ScrollView>
    </>
  );
}

export default MarketPlace;
