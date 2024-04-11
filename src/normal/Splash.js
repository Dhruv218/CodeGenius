

import React, { useEffect } from 'react';
import { Image, ScrollView,ImageBackground,StyleSheet, Text, View } from 'react-native';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  }, []);
   return (
       <ScrollView  className='bg-white pt-12'><Text className='absolute'></Text>
        <View>
            <Image className='w-full h-[380px] object-contain' source={require("../assets/spash.gif")}/>
        </View>
        <View className='flex flex-col items-center text-center my-4'>
        <Text className='font-semibold text-[25px] text-center mb-4 text-purple-600'><Text className='text-red-600'>CodeGenius</Text> : Where Brilliance Meets Binary</Text>
        <Text className='font-normal text-center text-black text-[14px] '>CodeGenius empowers aspiring and seasoned coders alike with cutting-edge tools and a vibrant community, helping you master the art of coding and achieve your goals.</Text>
        </View>
       </ScrollView>
    );
}
 
export default Splash;
